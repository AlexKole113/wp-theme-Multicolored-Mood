import CSS from "./CSS/componentCSS.js";
export default class HomeWidgetTextLeft extends HTMLElement {

    static observedAttributes = [ 'cssClassName', 'title', 'text' , 'link', 'image', 'socialLinks' ];
    static template = document.createElement('template');

    static getHTML = ({ cssClassName, title, text, link, image , sliderController }) => (`
         ${ CSS }
        <div class="home-widget-text-left ${cssClassName}">
            <div class="home-widget-collection">
                <div class="home-widget-collection__item">
                    <div class="home-widget-text-left__text">
                        <span class="widget-title">
                           ${title}
                        </span>
                        <span class="widget-tiny-text">
                           ${text}
                        </span>
                    </div>
                    <img class="home-widget-image" src="${image}" alt="">
                    <a class="home-widget-link" href="${link}"></a>
                </div>
            </div>
            ${
                sliderController ? (`<div class="home-widget-slider-mob__elements">
                                            <ul class="dots">
                                                <li class="dots__item active-dot">
                                                    <a class="dots__item_link" href="#"></a>
                                                </li>
                                                <li class="dots__item">
                                                    <a class="dots__item_link" href="#"></a>
                                                </li>
                                                <li class="dots__item">
                                                    <a class="dots__item_link" href="#"></a>
                                                </li>                                               
                                            </ul>
                                        </div>`
                                      ) : ''
             }
         
        </div>
    `);

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const props = {
            cssClassName:  this.getAttribute('cssClassName') ?? 'home-widget-text-center',
            title: this.getAttribute('title') ?? 'Title',
            text:  this.getAttribute('text') ?? 'text',
            link:  this.getAttribute('link') ?? '#',
            image: this.getAttribute('image') ?? 'home-widget/assets/widget-1.png',
            sliderController: this.getAttribute('sliderController') ?? false,
        }

        HomeWidgetTextLeft.template.innerHTML = HomeWidgetTextLeft.getHTML( props );
        this?.shadowRoot?.append(HomeWidgetTextLeft.template.content.cloneNode(true));


        this.onmousedown = (event) => {
            event.preventDefault();
            const e = new CustomEvent( 'activate',{ cancelable:true } );
            this.dispatchEvent(e)
            this.setAttribute('activate', true)
        }

        this.onmouseup = () => {
            this.removeAttribute('activate')
        }


    }

    connectedCallback() {

    }

    attributeChangedCallback( name, oldVal, newVal ) {
        switch ( name ) {
            case 'text':
                if( HomeWidgetTextLeft.isNewValChanged( newVal, oldVal ) ) console.log( 'text changed' );
                break;
            case 'link':
                if( HomeWidgetTextLeft.isNewValChanged( newVal, oldVal ) ) console.log( 'link changed' );
                break;
        }
    }

    static isNewValChanged = ( newVal, oldVal ) => newVal !== oldVal
}


