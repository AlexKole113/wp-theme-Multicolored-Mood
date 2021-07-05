class MenuEffect {

    constructor( parentElement ) {
        if( !parentElement ) {
            console.log('no parent element');
            return
        }
        this._parentElm = parentElement;
    }

    _getMaxScreenSide = () => (window.innerWidth > window.innerHeight) ? window.innerWidth : window.innerHeight

    _setCanvasSizes = () => {
        if(!this._app) {
            console.log('no app');
            return;
        }
        this._app.view.height = window.innerHeight;
        this._app.view.width  = window.innerWidth;
    }

    _menuOpenEffectCreate = () => {
        const app = new PIXI.Application();
        this._parentElm.prepend(app.view);
        app.view.height = 0;
        app.view.width  = 0;
        // Build geometry.
        const geometry = new PIXI.Geometry()
            .addAttribute('aVertexPosition', // the attribute name
                [0, 0, // x, y
                    this._getMaxScreenSide() , 0, // x, y
                    this._getMaxScreenSide(), this._getMaxScreenSide(),
                    0, this._getMaxScreenSide()], // x, y
                2) // the size of the attribute
            .addAttribute('aUvs', // the attribute name
                [0, 0, // u, v
                    1, 0, // u, v
                    1, 1,
                    0, 1], // u, v
                2) // the size of the attribute
            .addIndex([0, 1, 2, 0, 2, 3]);

        // Vertex shader. Use same shader for all passes.
        const vertexSrc = `

    precision mediump float;

    attribute vec2 aVertexPosition;
    attribute vec2 aUvs;

    uniform mat3 translationMatrix;
    uniform mat3 projectionMatrix;

    varying vec2 vUvs;

    void main() {

        vUvs = aUvs;
        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    }`;

        // Load a perlinnoise texture for one of the shaders.
        const perlinTexture = PIXI.Texture.from('header/assets/fog-1.png');

        // Second effect. Generates a filtered noise.
        const fragmentNoiseSrc = `
precision mediump float;
varying vec2 vUvs;
uniform float limit;
uniform sampler2D noise;

void main()
{
    float color = texture2D(noise, vUvs).r;
    color = step(limit, color);
    gl_FragColor = vec4(color);
}`;
        const noiseUniforms = {
            limit: .5,
            noise: perlinTexture,
        };
        const noiseShader    = PIXI.Shader.from(vertexSrc, fragmentNoiseSrc, noiseUniforms);
        const noiseTexture   = PIXI.RenderTexture.create(this._getMaxScreenSide(), this._getMaxScreenSide());
        const noiseQuad      = new PIXI.Mesh(geometry, noiseShader);
        const noiseContainer = new PIXI.Container();
        noiseContainer.addChild(noiseQuad);

        noiseContainer.position.set(0, 0);

        // Add all phases to stage so all the phases can be seen separately.
        app.stage.addChild(noiseContainer);


        new Promise((resolve ) => {
            // start the animation..
            let time = 0;
            app.ticker.add((delta) => {
                if(time > 100) return;
                time += 1 / 80;
                // gridQuad.shader.uniforms.zoom = Math.sin(time)*5+10;
                noiseQuad.shader.uniforms.limit = time * .4;

                // Render the passes to get textures.
                app.renderer.render(noiseQuad, noiseTexture);
            });

            setTimeout(()=>{
                resolve(null)
            },50)
        })
            .then(()=>{
                this._setCanvasSizes()
            })




        this._app = app;
    }

    _linkHoverEffect = ( element , textContent ) =>{
        const width  = textContent.length * 20;
        const height = 80;
        const filter = 'header/assets/displace-1.png';

        const app = new PIXI.Application({width, height, antialias: true, transparent: true});
        app.view.width  = width;
        app.view.height = height;
        element.appendChild( app.view );
        app.stage.interactive = true;
        const container = new PIXI.Container();
        app.stage.addChild(container);

        const displacementSprite = PIXI.Sprite.from( filter );
        displacementSprite.width  = 50;
        displacementSprite.height = 50;

        const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
        app.stage.addChild(displacementSprite);
        container.filters = [displacementFilter];
        displacementFilter.scale.x = 65;
        displacementFilter.scale.y = 65;
        displacementSprite.anchor.set(0.5);



        const textCanvas = new PIXI.Application({width, height, antialias: true, transparent: true});
        const text = new PIXI.Text( textContent );
        textCanvas.stage.addChild( text )
        text.style = new PIXI.TextStyle({
            fontFamily: "Montserrat",
            letterSpacing: 5,
            fontSize: '16px',
            fill: "#ffffff",
        })
        text.x = textCanvas.screen.width/2 - text.width/2;
        text.y = textCanvas.screen.height/2- text.height/2;
        textCanvas.render()



        const bg = PIXI.Sprite.from( textCanvas.view );
        bg.width  = width;
        bg.height = height;
        bg.alpha  = 1;
        container.addChild(bg);


        app.stage
            .on('mousemove', (e)=>{ displacementSprite.position.set(e.data.global.x, e.data.global.y) } )
            .on('touchmove', (e)=>{displacementSprite.position.set(e.data.global.x, e.data.global.y)  } );

    }


    init = () => {
        this._menuOpenEffectCreate();
        this._parentElm.querySelectorAll('a').forEach((link) => {
            const text = link.textContent;
            link.textContent = ``;
            this._linkHoverEffect(link , text);
        })

        window.addEventListener('resize', this._setCanvasSizes );
    }


    destroy = () => {
        this._app.destroy();
        window.removeEventListener('resize', this._setCanvasSizes)
        this._parentElm.querySelectorAll('canvas').forEach((item)=>{
            item.remove()
        })
    }
}

export default MenuEffect;
