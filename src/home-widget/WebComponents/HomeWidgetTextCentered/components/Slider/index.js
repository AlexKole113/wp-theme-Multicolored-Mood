import EventBus from "../../../../../scripts/EventBus.js";
import TextEffect from "../TextEffect/index.js";
import ThreeImageChange from "../ImageEffect/index.js";

class Slider extends EventBus {

    //TODO: EVENTS and hooks
    // NEXT, PAUSE, STOP, DESTROY,

    events = new Map([
        ['START',   []],
        ['NEXT',     []],
        ['PAUSE', []],
        ['STOP', []],
        ['DESTROY',   []]
    ])

    _process = false;

    _next = () => {
        if(this._process) return;
        this._process = true;
        this.container.dispatchEvent( new CustomEvent( 'slider-next', { cancelable:true } ) );
        const currentSlide = (this.currentSlide + 1) % this.slidesAmount;

        Promise.all([this.imageEffect.next( currentSlide ),this.textEffect.next( currentSlide )])
            .then(()=>{
                this.currentSlide = currentSlide;
                this._process = false;
            })
    }

    _pause = () => {
        this.container.dispatchEvent( new CustomEvent( 'slider-pause', { cancelable:true } ) );
    }

    _stop = () => {
        this.container.dispatchEvent( new CustomEvent( 'slider-stop', { cancelable:true } ) );
    }

    _destroy = () => {
        this.container.dispatchEvent( new CustomEvent( 'slider-destroy', { cancelable:true } ) );
    }

    _validateData = () => {
        if(this.images.length !== this.text.length ){
            throw new Error('Slider Error images.length !== text.length');
        }
    }


    constructor({items, container, transition = 1}) {
        super()
        this.container = container;
        this.images = items.map(({imageUrl}) => imageUrl);
        this.text =  items.map(({title,text}) => [title,text]);
        this._validateData();

        this.slidesAmount = this.images.length;
        this.currentSlide = 0;
        this.imageEffect = new ThreeImageChange({
            duration: transition,
            uniforms: {
                intensity: {value: 1, type:'f', min:0., max:3}
            },
            fragment: `
		uniform float time;
		uniform float progress;
		uniform float intensity;
		uniform float width;
		uniform float scaleX;
		uniform float scaleY;
		uniform float transition;
		uniform float radius;
		uniform float swipe;
		uniform sampler2D texture1;
		uniform sampler2D texture2;
		uniform sampler2D displacement;
		uniform vec4 resolution;
		varying vec2 vUv;
		mat2 getRotM(float angle) {
		    float s = sin(angle);
		    float c = cos(angle);
		    return mat2(c, -s, s, c);
		}
		const float PI = 3.1415;
		const float angle1 = PI *0.25;
		const float angle2 = -PI *0.75;


		void main()	{
			vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

			vec4 disp = texture2D(displacement, newUV);
			vec2 dispVec = vec2(disp.r, disp.g);

			vec2 distortedPosition1 = newUV + getRotM(angle1) * dispVec * intensity * progress;
			vec4 t1 = texture2D(texture1, distortedPosition1);

			vec2 distortedPosition2 = newUV + getRotM(angle2) * dispVec * intensity * (1.0 - progress);
			vec4 t2 = texture2D(texture2, distortedPosition2);

			gl_FragColor = mix(t1, t2, progress);

		}

	`,
            images:this.images,
            container
        });
        this.textEffect = new TextEffect({textContainer: container.querySelectorAll('.home-widget-text-center__text .widget-title'), duration:transition});
        this.init()
    }

    init = () => {
        this._on('NEXT', this._next );
        this._on('PAUSE', this._pause  );
        this._on('STOP', this._stop );
        this._on('DESTROY', this._destroy );

        //TODO: test changing slides
        document.body.addEventListener('click', ()=>{ this._do('NEXT')})

        this.container.addEventListener('slider-next', (e)=>{
           // console.log(e)
        })
    }


}

export default Slider;
