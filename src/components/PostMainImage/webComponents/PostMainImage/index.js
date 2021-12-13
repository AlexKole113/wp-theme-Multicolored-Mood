import componentCSS from "./CSS/componentCSS.js";
import componentHTML from "./HTML/componentHTML.js";
import ThreeImageChange from "./components/ImageEffect";

export default class PostMainImage extends HTMLElement {

    static getTemplate = () => (`
        ${ componentCSS }
        ${ componentHTML() }
    `);
    //static isNewValChanged = ( newVal, oldVal ) => newVal !== oldVal
    static observedAttributes = [ 'src','displacement', 'effect' ];
    static template = document.createElement('template');

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.props = {
            effect: this.getAttribute('effect'),
            delay: parseFloat(this.getAttribute('delay')),
            src: this.getAttribute('src'),
        }

        PostMainImage.template.innerHTML = PostMainImage.getTemplate();
        this?.shadowRoot?.append( PostMainImage.template.content.cloneNode(true) );
    }

    connectedCallback() {
        const image = new ThreeImageChange({
            displacement: '../src/components/PostMainImage/assets/disp/disp1.jpg',
            effect: this.props.effect,
            images: ['../src/components/PostMainImage/assets/white.jpeg' , this.props.src],
            container: this?.shadowRoot.querySelector('.widget-container')
        });

        image.wasInitiated.then(()=>{
            image.next(1)
        })
    }
}



