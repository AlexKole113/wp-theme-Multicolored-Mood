import componentCSS from "./CSS/componentCSS.js";
import componentHTML from "./HTML/componentHTML.js";
export default class HomeWidgetTextCentered extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const props = {
            data: JSON.parse( this.getAttribute('data' ) ),
        }
        HomeWidgetTextCentered.template.innerHTML = HomeWidgetTextCentered.getHTML( props.data );
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

    static observedAttributes = [ 'data' ];
    static template = document.createElement('template');

    static getHTML = ({ items, socialLinks }) => (`
        ${ componentCSS }
        ${ componentHTML( items , socialLinks ) }
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



