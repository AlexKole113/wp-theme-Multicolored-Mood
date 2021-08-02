import EventBus from "../../../../../scripts/EventBus.js";
import TextEffect from "../TextEffect/index.js";
import ThreeImageChange from "../ImageEffect/index.js";

class Slider extends EventBus {

    events = new Map([
        ['START',   []],
        ['NEXT',     []],
        ['PAUSE', []],
        ['STOP', []],
        ['DESTROY',   []]
    ])

    _process = false;

    next = () => {
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

    pause = () => {
        this.container.dispatchEvent( new CustomEvent( 'slider-pause', { cancelable:true } ) );
    }

    stop = () => {
        this.container.dispatchEvent( new CustomEvent( 'slider-stop', { cancelable:true } ) );
    }

    destroy = () => {
        this.container.dispatchEvent( new CustomEvent( 'slider-destroy', { cancelable:true } ) );
    }

    _validateData = () => {
        if(this.images.length !== this.text.length ){
            throw new Error('Slider Error images.length !== text.length');
        }
    }

    constructor({items, container, transition = 1 ,displacement, effect}) {
        super()
        this.container = container;
        this.images = items.map(({imageUrl}) => imageUrl);
        this.text =  items.map(({title,text}) => [title,text]);
        this._validateData();

        this.slidesAmount = this.images.length;
        this.currentSlide = 0;
        this.imageEffect = new ThreeImageChange({
            displacement,
            effect,
            duration: transition,
            images:this.images,
            container
        });
        this.textEffect = new TextEffect({textContainer: container.querySelectorAll('.widget-title'), duration:transition});
        this.init()
    }

    init = () => {
        this._on('NEXT', this.next );
        this._on('PAUSE', this.pause  );
        this._on('STOP', this.stop );
        this._on('DESTROY', this.destroy );
        this.container.addEventListener('slider-next', (e)=>{
           // console.log(e)
        })
    }


}

export default Slider;
