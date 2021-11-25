import componentCSS from "./CSS/componentCSS.js";
import componentHTML from "./HTML/componentHTML.js";
import Slider from "./components/Slider/index.js";

export default class SliderWidget extends HTMLElement {

    static getTemplate = ( props ) => (`
        ${ componentCSS }
        ${ componentHTML( props ) }
    `);
    //static isNewValChanged = ( newVal, oldVal ) => newVal !== oldVal
    static observedAttributes = [ 'data' , 'text', 'displacement', 'effect' ];
    static template = document.createElement('template');


    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.props = {
            data: JSON.parse( this.getAttribute('data' ) ),
            text: this.getAttribute('text'),
            displacement: this.getAttribute('displacement'),
            effect: this.getAttribute('effect'),
            delay: parseFloat(this.getAttribute('delay')),
        }

        SliderWidget.template.innerHTML = SliderWidget.getTemplate( this.props );
        this?.shadowRoot?.append( SliderWidget.template.content.cloneNode(true) );

        const {data:items} = this.props;
        this.setAttribute('charged', items.length)
        this.onmousedown = (event) => {
            event.preventDefault();
            const e = new CustomEvent( 'activate',{ cancelable:true } );
            this.dispatchEvent(e)
            this.setAttribute('activate', true)
        }
        this.onmouseup = () => {
            this.removeAttribute('activate')
        }
    }

    connectedCallback() {
        const slider = new Slider({
            items: this.props.data.items,
            delay: this.props.delay,
            container: this?.shadowRoot.querySelector('.home-widget-container'),
            transition: 2,
            displacement: this.props.displacement,
            effect: this.props.effect,
            navigationContainer: this?.shadowRoot.querySelector('.dots-container')
        });
        slider.init();

        if(this?.shadowRoot.querySelectorAll('.dots-item')){

            this?.shadowRoot.querySelectorAll('.dots-item')
            .forEach(item => {
                item.addEventListener('click', ()=>{
                    if(item.hasAttribute('data-slide')){
                        slider.goTo(item.getAttribute('data-slide'))
                    }
                })
            })
        }
    }
}



