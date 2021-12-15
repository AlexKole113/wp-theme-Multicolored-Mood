import componentCSS from "./CSS/componentCSS.js";
import componentHTML from "./HTML/componentHTML.js";
import loadingHTML from "./HTML/componentLoadingHTML";
export default class LastPostItem extends HTMLElement {

    static observedAttributes = [ 'id', 'loading', 'data' ];
    static template = document.createElement('template');
    getHTML = () => (`
       ${ componentCSS }
       ${ this.loading === 'true' ? loadingHTML() : componentHTML( {...this.data} ) }
    `);

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.id = this.getAttribute('id');
        this.loading = this.getAttribute('loading') ?? 'true';
        this.render();
    }

    connectedCallback = () => {
        setTimeout(() => {
            this.setAttribute('loading', 'false')
        },2000)
    }

    attributeChangedCallback = () => {
        console.log(this.loading)
        this.render();
    }

    render = () => {
        LastPostItem.template.innerHTML = this.getHTML();
        this?.shadowRoot?.append( LastPostItem.template.content.cloneNode(true) );
    }

}
