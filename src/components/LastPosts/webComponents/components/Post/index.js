import componentCSS from "./CSS/componentCSS.js";
import componentHTML from "./HTML/componentHTML.js";
import loadingHTML from "./HTML/componentLoadingHTML";
export default class LastPostItem extends HTMLElement {

    static observedAttributes = [ 'id', 'loading', 'data' ];

    getHTML = ({loading,data}) => (`
       ${ componentCSS }
       ${ loading === 'true' ? loadingHTML() : componentHTML( {...data} ) }
    `);
    getProps = () => ({
        id: this.getAttribute('id') * 1,
        loading: this.getAttribute('loading') ?? 'true',
        data: this.getAttribute('data'),
    })
    getPosts = () => {
        return new Promise((res)=>{
            setTimeout(() => {
                res(null)
            }, Math.random() * (1500 - 400) + 400 )
        })
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){
        this.getPosts()
            .then(()=>{
                console.log( 'update attrs' )
                this.setAttribute('loading', 'false')
            })
    }

    attributeChangedCallback(attrName, oldVal, newVal){
        console.log('rerender after attrs change')
        this.render();
    }

    render = () => {
        this.shadowRoot.innerHTML = ``;
        const template = document.createElement('template');
        template.innerHTML = this.getHTML(this.getProps());
        this.shadowRoot.append( template.content.cloneNode(true) );
    }

}
