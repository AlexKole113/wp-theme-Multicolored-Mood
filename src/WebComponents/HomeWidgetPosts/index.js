import componentCSS from "./CSS/componentCSS.js";
import componentHTML from "./HTML/componentHTML.js";
export default class HomeWidgetPosts extends HTMLElement {

    static observedAttributes = [ 'title' ];
    static template = document.createElement('template');
    static getHTML = ({ title }) => (`
       ${ componentCSS }
       ${ componentHTML( title ) }
    `);

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const props = {
            title: this.getAttribute('title') ?? 'Title',
        }

        HomeWidgetPosts.template.innerHTML = HomeWidgetPosts.getHTML( props );
        this?.shadowRoot?.append( HomeWidgetPosts.template.content.cloneNode(true) );
    }

}
