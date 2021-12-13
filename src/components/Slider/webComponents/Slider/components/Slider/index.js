import EventBus from "../../../../../../common/scripts/EventBus.js";
import TextEffect from "../TextEffect/index.js";
import ThreeImageChange from "../ImageEffect/index.js";
import Swipe from "../Swiper";

class Slider extends EventBus {

    static getDotTemplate = (attrs = '') => `<svg width="20" height="20"><circle r="10" cx="10" cy="10" ${attrs} /></svg>`;
    static dotDashArrayValue = 64;

    events = new Map([
        ['START',   []],
        ['NEXT',     []],
        ['PREV',     []],
        ['PAUSE', []],
        ['STOP', []],
        ['DESTROY',   []]
    ])

    _process = false;
    _clearInterval = null;
    _interval = 3000;

    constructor({items, container, transition = 1 , navigationContainer, displacement, effect, delay, dots}) {
        super()
        this.container = container;
        this.images = items.map(({imageUrl}) => imageUrl);
        this.text =  items.map(({title,text}) => [title,text]);
        this.dots = (dots === 'true');
        this._validateData();
        this._interval = delay ?? 3000;
        this._transition = transition;
        this.slidesAmount = this.images.length;
        this.currentSlide = 0;


        this.imageEffect = new ThreeImageChange({
            displacement,
            effect,
            duration: this._transition,
            images:this.images,
            container
        });
        this.textEffect = new TextEffect({textContainer: container.querySelectorAll('.text-morph'), duration: this._transition });
        if(navigationContainer) this._setupNavigation(navigationContainer);
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
        }).onRight(() => {
            this._do('PREV')
        }).run()

        this.imageEffect.wasInitiated.then(()=>{
            this.goTo(0)
        })
    }


    prev = () => {
        if(this._process) return;
        this._process = true;
        this.container.dispatchEvent( new CustomEvent( 'slider-prev', { cancelable:true } ) );
        const currentSlide =  ( this.currentSlide - 1 < 0) ? this.slidesAmount - 1 : this.currentSlide - 1 ;

        this._work(currentSlide);
    }

    next = () => {

        window.clearInterval(this._clearInterval)

        if(this._process) return;
        this._process = true;
        this.container.dispatchEvent( new CustomEvent( 'slider-next', { cancelable:true } ) );
        const currentSlide = (this.currentSlide + 1) % this.slidesAmount;
        this._work(currentSlide);
    }

    goTo = (num) => {
        if(this._process) return;
        this._process = true;
        window.clearInterval(this._clearInterval)
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
                item.innerHTML = '';
            })
            return new Promise((resolve) => {
                this.navigationContainer.querySelectorAll('.dots-item').forEach(item => {
                    if( item.getAttribute('data-slide') === `${newActiveSlide}` ) {
                        item.innerHTML = Slider.getDotTemplate();
                        const percent = Slider.dotDashArrayValue / 18;
                        let start = 0;
                        const interval = setInterval(() => {
                            item.querySelector( 'circle' ).style.strokeDasharray = `${ (start+=percent).toFixed(0) } ${Slider.dotDashArrayValue}`;
                            if ( start > Slider.dotDashArrayValue ) {
                                clearInterval(interval);
                                resolve(true)
                            }
                        }, this._transition * 1000 / 16.8 )
                    }
                })
            })
        }
    }

    _setupNavigation = (container) => {
        if(!container || !this.dots) return;
        for(let i = 0; i < this.images.length; i++){
            const dot = document.createElement('span');
            dot.classList.add('dots-item')
            if(i === 0) {
                dot.innerHTML = Slider.getDotTemplate(`style="stroke-dasharray: 64 64"`);
            }
            dot.setAttribute('data-slide', i);
            dot.addEventListener('click', ()=>{
                this.goTo(i)
            })
            container.append(dot)
        }
        this.navigationContainer = container;
    }

    _work = ( slideNum ) => {
        Promise.all( [this.imageEffect.next( slideNum ), this.textEffect.next( slideNum ), this._activeDotsUpdate( slideNum ) ])
            .then(()=>{
               this.currentSlide = slideNum;
               this._process = false;
               this._clearInterval = setTimeout(()=>{
                   this._do('NEXT')
                }, this._interval)
            })
    }

}

export default Slider;
