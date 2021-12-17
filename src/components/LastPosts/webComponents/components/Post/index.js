import componentCSS from "./CSS/componentCSS.js";
import componentHTML from "./HTML/componentHTML.js";
import loadingHTML from "./HTML/componentLoadingHTML";
export default class LastPostItem extends HTMLElement {

    static observedAttributes = [ 'id', 'loading', 'data' ];

    getHTML = ({loading,data}) => (`
       ${ componentCSS }
       ${ loading === 'true' ? loadingHTML() : componentHTML( {...JSON.parse(data)} ) }
    `);
    getProps = () => ({
        id: this.getAttribute('id') * 1,
        loading: this.getAttribute('loading') ?? 'true',
        data: this.getAttribute('data'),
    })
    getPosts = () => fetch(`https://laughable-quest.flywheelsites.com/wp-json/wp/v2/posts/${this.getProps().id}`).then( r => r.json())

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){
        this.getPosts()
            .then((data)=>{
                console.log( data )
                this.setAttribute('loading', 'false')
                this.setAttribute('data', JSON.stringify(data) )
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
