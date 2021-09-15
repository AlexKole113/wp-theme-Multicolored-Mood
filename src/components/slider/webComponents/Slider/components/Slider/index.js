import EventBus from "../../../../../../common/scripts/EventBus.js";
import TextEffect from "../TextEffect/index.js";
import ThreeImageChange from "../ImageEffect/index.js";
import Swipe from "../Swiper";

class Slider extends EventBus {

    events = new Map([
        ['START',   []],
        ['NEXT',     []],
        ['PREV',     []],
        ['PAUSE', []],
        ['STOP', []],
        ['DESTROY',   []]
    ])

    _process = false;

    prev = () => {
        if(this._process) return;
        this._process = true;
        this.container.dispatchEvent( new CustomEvent( 'slider-prev', { cancelable:true } ) );
        const currentSlide =  ( this.currentSlide - 1 < 0) ? this.slidesAmount - 1 : this.currentSlide - 1 ;

        this._activeDotsUpdate(currentSlide);
        this._work(currentSlide);
    }

    next = () => {
        if(this._process) return;
        this._process = true;
        this.container.dispatchEvent( new CustomEvent( 'slider-next', { cancelable:true } ) );
        const currentSlide = (this.currentSlide + 1) % this.slidesAmount;

        this._activeDotsUpdate(currentSlide);
        this._work(currentSlide);
    }

    goTo = (num) => {
        if(this._process) return;
        this._process = true;

        this._activeDotsUpdate(num);
        this._work(num);
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

    _activeDotsUpdate = (newActiveSlide) => {
        if(this.navigationContainer){
            this.navigationContainer.querySelectorAll('.dots-item').forEach(item => {
                if(item.getAttribute('data-slide') === `${newActiveSlide}`) {

                    item.classList.add('active-dot')
                } else {
                    item.classList.remove('active-dot')
                }
            })
        }
    }

    _setupNavigation = (container) => {
        if(!container) return;
        for(let i = 0; i < this.images.length; i++){
            const dot = document.createElement('span');
            dot.classList.add('dots-item')
            if(i === 0) dot.classList.add('active-dot')
            dot.setAttribute('data-slide', i);
            dot.addEventListener('click', ()=>{
                this.goTo(i)
            })
            container.append(dot)
        }
        this.navigationContainer = container;
    }

    _work = (slideNum) => {
        Promise.all([this.imageEffect.next( slideNum ),this.textEffect.next( slideNum )])
            .then(()=>{
                this.currentSlide = slideNum;
                this._process = false;
            })
    }

    constructor({items, container, transition = 1 , navigationContainer, displacement, effect}) {
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
        this.textEffect = new TextEffect({textContainer: container.querySelectorAll('.text-morph'), duration:transition});

        if(navigationContainer){
            this._setupNavigation(navigationContainer)
        }
        this.init()
    }

    init = () => {
        this._on('NEXT', this.next );
        this._on('PREV', this.prev );
        this._on('PAUSE', this.pause  );
        this._on('STOP', this.stop );
        this._on('DESTROY', this.destroy );
        this.container.addEventListener('slider-next', (e)=>{
           // console.log(e)
        })

        const swiper = new Swipe(this.container);
        swiper.onLeft(()=>{
           this._do('NEXT')
        }).onRight(()=>{
            this._do('PREV')
        }).run()
    }


}

export default Slider;
