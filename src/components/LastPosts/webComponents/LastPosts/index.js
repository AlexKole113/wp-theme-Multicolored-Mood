import componentCSS from "./CSS/componentCSS.js";
import componentHTML from "./HTML/componentHTML.js";
import LastPostItem from "../components/Post";
export default class LastPosts extends HTMLElement {

    static observedAttributes = [ 'title', 'posts' ];
    static template = document.createElement('template');
    static getHTML = ( props ) => (`
       ${ componentCSS }
       ${ componentHTML( props ) }
    `);

    constructor() {
        super();
        customElements.define('last-post-item', LastPostItem )
        this.attachShadow({ mode: 'open' });
        this.props = {
            title: this.getAttribute('title') ?? 'Title',
            posts: this.getAttribute('posts').split(','),
        }

        LastPosts.template.innerHTML = LastPosts.getHTML( this.props );
        this?.shadowRoot?.append( LastPosts.template.content.cloneNode(true) );
    }
}
