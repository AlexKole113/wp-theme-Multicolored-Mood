export default class HomeWidgetTextLeft extends HTMLElement {

    static observedAttributes = [ 'cssClassName', 'title', 'text' , 'link', 'image', 'socialLinks' ];
    static template = document.createElement('template');
    static getCSS = () => (`
        <style>        
            :host .home-widget-collection {
                position: relative;
                padding-right: 2.5rem;
                height: 100%;
            }          
            :host .home-widget-text-center,
            :host .home-widget-text-left {
                height: 100%;
                overflow: hidden;
            }
            :host .home-widget-text-center {
                position: relative;
            }
            :host .home-widget-collection__item,
            :host .home-widget-image {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
            }
            :host .home-widget-collection__item {
                display: grid;
                place-content: center;
            }
            :host .home-widget-image {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
            :host .home-widget-text-center__text,
            :host .home-widget-text-left__text {
                color: var(--text-white);
                position: relative;
                width: calc(100vw - 5rem);
                margin: auto;
                display: flex;
                flex-flow: column;
                align-items: center;
                z-index: 1;
            }
            :host .widget-title {
                text-align: center;
                font-size: 1.75rem;
                font-weight: 700;
                letter-spacing: .75px;
                margin-bottom: .2rem;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            :host .widget-tiny-text {
                text-align: center;
                font-size: 1.18rem;
                letter-spacing: -0.5px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            :host .home-widget-text-center__text .widget-title {
                text-align: center;
            }
            :host .home-widget-text-center__text .widget-tiny-text {
                width: 100%;
                text-align: center;
                padding-left: 10px;
                font-size: 1.09rem;
            }
            :host .home-widget-text-left__text .widget-title {
                text-align: center;
            }
            :host .home-widget-text-left__text .widget-tiny-text {
                width: 100%;
                text-align: center;
            }
            :host .social-links {
                display: none;
            }
            :host .social-links__group {
                list-style: none;
                display: flex;
                flex-flow: column;
                justify-content: flex-start;
                height: 100%;
            }
            :host .social-links__item {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 105%;
            }
            :host .social-links__item:first-child {
                margin-top: 3.8rem;
            }
            :host .social-links__link {
                transform: rotate(90deg);
                max-width: 120px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            :host .social-links a {
                color: var(--text-white);
                text-decoration: none;
                font-size: .85rem;
                font-weight: 400;
                letter-spacing: .2px;
            } 
            :host .home-widget-slider-mob {

            }
            :host .home-widget-slider-mob__elements {
                position: absolute;
                top: -33.334vh;
                bottom: -33.334vh;
                right: 0;
                width: 2.5rem;
                background: var(--back-pure-white);
                z-index: 5;
            }
            :host .dots {
                list-style: none;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            :host .dots__item {
                position: relative;
                display: block;
                width: 1rem;
                height: 1rem;
                border-radius: 100%;
                border: 1px solid var(--text-light-gray);
            }
            :host .dots__item_link {
                position: absolute;
                display: block;
                border-radius: 100%;
                background: var(--text-light-gray);
                top: 2px;
                right: 2px;
                bottom: 2px;
                left: 2px;
                opacity: .3;
            }
            :host .active-dot .dots__item_link {
                opacity: 1;
            }
            :host .home-widget-slider-mob__elements .dots {
                flex-flow: column;
                height: 100%;
            }
            :host .home-widget-slider-mob__elements .dots .dots__item {
                margin-bottom: .85rem;
            }          
            @media (min-width: 1024px) {
                :host .home-widget-slider-mob__elements {
                    display: none;
                }
                :host .home-widget-collection {
                    padding-right: 0;
                }
                :host .home-widget-collection__item {
                    display: block;
                }
                :host .home-widget-text-center__text,
                :host .home-widget-text-left__text {
                    width: calc( 100% - var(--page-padding) );
                }            
                :host .home-widget-text-center__text {
                    justify-content: center;
                    padding-top: 1.65rem;
                }            
                :host .home-widget-text-left__text {
                    justify-content: flex-start;
                    margin-top: var(--page-padding);
                    margin-left: var(--page-padding);
                }          
                :host .home-widget-text-center__text .widget-title {
                    text-align: center;
                    padding-left: 10px;
                }           
                :host .home-widget-text-center__text .widget-tiny-text {
                    width: 100%;
                    text-align: center;
                    padding-left: 10px;
                    font-size: 1.09rem;
                }           
                :host .home-widget-text-left__text .widget-title {
                    text-align: left;
                }          
                :host .home-widget-text-left__text .widget-tiny-text {
                    width: 100%;
                    text-align: left;
                }            
                :host .widget-title {
                    font-size: 2.2rem;
                }           
                :host .social-links {
                    display: block;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    width: 5.75rem;
                    z-index: 5;
            
                }
            }
        </style>
    `);
    static getHTML = ({ cssClassName, title, text, link, image , sliderController }) => (`
         ${ HomeWidgetTextLeft.getCSS() }
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
        console.log('connected');
    }

    attributeChangedCallback( name, oldVal, newVal ) {
        switch ( name ) {
            case 'text':
                if( HomeWidgetTextLeft.isNewValChanged( newVal, oldVal ) ) console.log( newVal );
                break;
            case 'link':
                if( HomeWidgetTextLeft.isNewValChanged( newVal, oldVal ) ) console.log( newVal );
                break;
        }
    }

    static isNewValChanged = ( newVal, oldVal ) => newVal !== oldVal
}


