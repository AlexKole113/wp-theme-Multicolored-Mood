import componentCSS from "./CSS/componentCSS.js";
import componentHTML from "./HTML/componentHTML.js";
export default class HomeWidgetTextCentered extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const props = {
            title: this.getAttribute('title' ) ?? 'Title',
            text:  this.getAttribute('text' ) ?? 'text',
            link:  this.getAttribute('link' ) ?? '#',
            image: this.getAttribute('image' ) ?? 'home-widget/assets/widget-1.png',
            socialLinks: this.getAttribute('socialLinks') ?? false,
        }

        HomeWidgetTextCentered.template.innerHTML = HomeWidgetTextCentered.getHTML( props );
        this?.shadowRoot?.append( HomeWidgetTextCentered.template.content.cloneNode(true) );


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

    static observedAttributes = [ 'cssClassName', 'title', 'text' , 'link', 'image', 'socialLinks' ];
    static template = document.createElement('template');

    static getHTML = ({ title, text, link, image , socialLinks }) => (`
        ${ componentCSS }
        ${ componentHTML( title, text, link, image , socialLinks ) }
    `);

    connectedCallback() {

    }

    attributeChangedCallback( name, oldVal, newVal ) {
        switch ( name ) {
            case 'text':
                if( HomeWidgetTextCentered.isNewValChanged( newVal, oldVal ) ) console.log( 'text changed' );
                break;
            case 'link':
                if( HomeWidgetTextCentered.isNewValChanged( newVal, oldVal ) )  console.log( 'link changed' );
                break;
        }
    }

    static isNewValChanged = ( newVal, oldVal ) => newVal !== oldVal
}



