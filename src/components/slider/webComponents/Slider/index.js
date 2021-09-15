import componentCSS from "./CSS/componentCSS.js";
import componentHTML from "./HTML/componentHTML.js";
import Slider from "./components/Slider/index.js";
export default class SliderWidget extends HTMLElement {

    //static isNewValChanged = ( newVal, oldVal ) => newVal !== oldVal
    static observedAttributes = [ 'data' , 'text', 'displacement', 'effect' ];
    static template = document.createElement('template');
    static getTemplate = (textAlignment, {items} ) => (`
        ${ componentCSS }
        ${ componentHTML(textAlignment, items) }
    `);

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.props = {
            data: JSON.parse( this.getAttribute('data' ) ),
            text: this.getAttribute('text'),
            displacement: this.getAttribute('displacement'),
            effect: this.getAttribute('effect'),
        }

        const { text, data , data:{items} } = this.props;

        SliderWidget.template.innerHTML = SliderWidget.getTemplate( text, data );
        this?.shadowRoot?.append( SliderWidget.template.content.cloneNode(true) );

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
            container: this?.shadowRoot.querySelector('.home-widget-container'),
            transition: 2,
            displacement: this.props.displacement,
            effect: this.props.effect,
            navigationContainer: this?.shadowRoot.querySelector('.dots-container')
        });


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

    // attributeChangedCallback( name, oldVal, newVal ) {
    //     console.log('name->',name)
    //     switch ( name ) {
    //         case 'data':
    //             if( HomeWidget.isNewValChanged( newVal, oldVal ) ) {
    //                 console.log( 'data changed' );
    //             }
    //             break;
    //     }
    // }


}



