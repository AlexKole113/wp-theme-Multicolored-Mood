import componentCSS from "./CSS/componentCSS.js";
import componentHTML from "./HTML/componentHTML.js";
export default class TopPost extends HTMLElement {

    static getTemplate = ( props ) => (`
        ${ componentCSS }
        ${ componentHTML( props ) }
    `);

    static observedAttributes = [ 'data' , 'text', 'displacement', 'effect' ];
    static template = document.createElement('template');

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.props = {
            title: this.getAttribute('title'),
            excerpt: this.getAttribute('excerpt'),
            link: this.getAttribute('link'),
            lentText: this.getAttribute('lentText'),
            imageURL: this.getAttribute('imageURL'),
        }
        TopPost.template.innerHTML = TopPost.getTemplate( this.props );
        this?.shadowRoot?.append( TopPost.template.content.cloneNode(true) );
    }
}



