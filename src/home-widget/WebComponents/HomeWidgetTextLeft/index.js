import componentCSS from "./CSS/componentCSS.js";
import componentHTML from "./HTML/componentHTML.js";
export default class HomeWidgetTextLeft extends HTMLElement {

    static observedAttributes = [ 'cssClassName', 'title', 'text' , 'link', 'image', 'socialLinks' ];
    static template = document.createElement('template');

    static getHTML = ({ cssClassName, title, text, link, image , sliderController }) => (`
         ${ componentCSS }
         ${ componentHTML( cssClassName, title, text, link, image , sliderController ) }
    `);

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const props = {
            cssClassName:  this.getAttribute('cssClassName') ?? 'home-widget-text-center',
            title: this.getAttribute('title') ?? 'Title',
            text:  this.getAttribute('text') ?? 'text',
            link:  this.getAttribute('link') ?? '#',
            image: this.getAttribute('image') ?? 'home-widget/assets/widget-1.png',
            sliderController: this.getAttribute('sliderController') ?? false,
        }

        HomeWidgetTextLeft.template.innerHTML = HomeWidgetTextLeft.getHTML( props );
        this?.shadowRoot?.append(HomeWidgetTextLeft.template.content.cloneNode(true));


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

    }

    attributeChangedCallback( name, oldVal, newVal ) {
        switch ( name ) {
            case 'text':
                if( HomeWidgetTextLeft.isNewValChanged( newVal, oldVal ) ) console.log( 'text changed' );
                break;
            case 'link':
                if( HomeWidgetTextLeft.isNewValChanged( newVal, oldVal ) ) console.log( 'link changed' );
                break;
        }
    }

    static isNewValChanged = ( newVal, oldVal ) => newVal !== oldVal
}


