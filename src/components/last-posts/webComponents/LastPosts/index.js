import componentCSS from "./CSS/componentCSS.js";
import componentHTML from "./HTML/componentHTML.js";
export default class LastPosts extends HTMLElement {

    static observedAttributes = [ 'title' ];
    static template = document.createElement('template');
    static getHTML = ( props ) => (`
       ${ componentCSS }
       ${ componentHTML( props ) }
    `);

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.props = {
            title: this.getAttribute('title') ?? 'Title',
        }

        LastPosts.template.innerHTML = LastPosts.getHTML( this.props );
        this?.shadowRoot?.append( LastPosts.template.content.cloneNode(true) );
    }

}
