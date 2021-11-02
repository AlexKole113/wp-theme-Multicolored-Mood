// Custom Events:
// 'open-post' - on post open
import componentCSS from "./CSS/componentCSS.js";
import componentHTML from "./HTML/componentHTML.js";
import OpenPostHandler from "./components/OpenPostHandler";
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
            linkText: this.getAttribute('linkText') ?? 'More',
            imageURL: this.getAttribute('imageURL'),
            titleSize: this.getAttribute('titleSize') ?? 'medium',
        }
        TopPost.template.innerHTML = TopPost.getTemplate( this.props );
        this?.shadowRoot?.append( TopPost.template.content.cloneNode(true) );
    }

    connectedCallback() {
        this.openPost = new OpenPostHandler({ parent: this });
        this.openPost.init();
        this?.shadowRoot.querySelector('.widget-link').addEventListener('click', (e) => {
            e.preventDefault();
            this.openPost.toggle()
        })
    }
}



