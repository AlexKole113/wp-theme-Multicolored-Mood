class MenuEffect {

    // morph svg + filter svg
    // 1. Переход от маленькой клюксы SVG к большой SVG
    // 2. Специальный бэкграунд который будет виден через фильтр SVG

    constructor( parentElement ) {
        if( !parentElement ) {
            console.log('no parent element');
            return
        }
        this._parentElm = parentElement;

    }

    init = () => {
        const app = new PIXI.Application();
        this._parentElm.prepend(app.view);
        app.view.height = 0;
        app.view.width  = 0;
        // Build geometry.
        const geometry = new PIXI.Geometry()
            .addAttribute('aVertexPosition', // the attribute name
                [0, 0, // x, y
                    window.innerWidth, 0, // x, y
                    window.innerWidth, window.innerWidth,
                    0, window.innerWidth], // x, y
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
        const noiseShader = PIXI.Shader.from(vertexSrc, fragmentNoiseSrc, noiseUniforms);
        const noiseTexture = PIXI.RenderTexture.create(innerWidth, innerWidth);
        const noiseQuad = new PIXI.Mesh(geometry, noiseShader);
        const noiseContainer = new PIXI.Container();
        noiseContainer.addChild(noiseQuad);



        noiseContainer.position.set(0, 0);


        // Add all phases to stage so all the phases can be seen separately.
        app.stage.addChild(noiseContainer);


        new Promise((resolve ) => {
            // start the animation..
            let time = 0;
            app.ticker.add((delta) => {
                time += 1 / 90;
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
            app.view.height = window.innerHeight;
            app.view.width  = window.innerWidth;
        })




        this._app = app;
    }


    destroy = () => {
        this._parentElm.querySelectorAll('canvas').forEach((item)=>{
            item.remove()
        })
    }
}

export default MenuEffect;
