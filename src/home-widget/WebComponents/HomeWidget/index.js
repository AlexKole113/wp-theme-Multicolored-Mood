import componentCSS from "./CSS/componentCSS.js";
import componentHTML from "./HTML/componentHTML.js";
import Slider from "./components/Slider/index.js";
export default class HomeWidget extends HTMLElement {

    // TODO: Cypress test cases
    //  1. add JSON to data attribute (10 JSON cases) and check queue;
    //  2. Mobile and crossbrowser check

    //static isNewValChanged = ( newVal, oldVal ) => newVal !== oldVal
    static observedAttributes = [ 'data' ];
    static template = document.createElement('template');
    static getHTML = ({ items, socialLinks }) => (`
        ${ componentCSS }
        ${ componentHTML( items , socialLinks ) }
    `);

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.props = {
            data: JSON.parse( this.getAttribute('data' ) ),
        }

        const { data , data:{items} } = this.props;

        HomeWidget.template.innerHTML = HomeWidget.getHTML( data );
        this?.shadowRoot?.append( HomeWidget.template.content.cloneNode(true) );

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
        this.slider = new Slider({
            items: this.props.data.items,
            container: this?.shadowRoot.querySelector('.home-widget-container'),
            transition: 2
        });


        //Subscribe on Mediator Event "NEXT" then call -> this.slider._do('NEXT')
        document.body.addEventListener('click', ()=>{
            this.slider._do('NEXT')
        })
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



