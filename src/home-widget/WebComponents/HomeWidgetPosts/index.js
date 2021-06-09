import componentCSS from "./CSS/componentCSS.js";
export default class HomeWidgetPosts extends HTMLElement {

    static observedAttributes = [ 'title' ];
    static template = document.createElement('template');
    static getHTML = ({ title }) => (`
       ${ componentCSS }
       <div class="home-widget-posts">
            <div class="home-widget-posts__title">
                <span>${title}</span>
            </div>
            <slot name="posts"></slot>         
        </div>
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
