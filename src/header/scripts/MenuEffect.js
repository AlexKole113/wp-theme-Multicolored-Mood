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

    _linkHoverEffect = () =>{

        const innerLinkCanvas        = document.createElement('canvas');
        innerLinkCanvas.width = 300;
        innerLinkCanvas.height = 200;
        const contextInnerLinkCanvas = innerLinkCanvas.getContext('2d');
        contextInnerLinkCanvas.font = ".9rem Montserrat";
        contextInnerLinkCanvas.fillStyle = "#ffffff";
        contextInnerLinkCanvas.fillText("Home", 100, 50);



        const filter     = 'https://pixijs.io/examples/examples/assets/pixi-filters/displace.png';
        const background = innerLinkCanvas;
        const app = new PIXI.Application();

        app.view.width = 300;
        app.view.height = 200;
        this._parentElm.appendChild(app.view);

        app.stage.interactive = true;

        const container = new PIXI.Container();
        app.stage.addChild(container);


        const displacementSprite = PIXI.Sprite.from( filter );
        const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
        app.stage.addChild(displacementSprite);
        container.filters = [displacementFilter];
        displacementFilter.scale.x = 40;
        displacementFilter.scale.y = 40;
        displacementSprite.anchor.set(0.5);


        const bg = PIXI.Sprite.from( background );
        bg.width = 300;
        bg.height = 200;
        bg.alpha = 2;
        container.addChild(bg);

        app.stage
            .on('mousemove', (e)=>{ displacementSprite.position.set(e.data.global.x - 25, e.data.global.y) } )
            .on('touchmove', (e)=>{displacementSprite.position.set(e.data.global.x - 25, e.data.global.y)  } );




    }


    init = () => {
        this._menuOpenEffectCreate();
        this._linkHoverEffect();
        window.addEventListener('resize', this._setCanvasSizes );
    }


    destroy = () => {
        this._app.destroy()
        window.removeEventListener('resize', this._setCanvasSizes)
        this._parentElm.querySelectorAll('canvas').forEach((item)=>{
            item.remove()
        })
    }
}

export default MenuEffect;
