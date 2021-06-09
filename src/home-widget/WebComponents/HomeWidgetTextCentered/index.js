import CSS from "./CSS/componentCSS.js";
export default class HomeWidgetTextCentered extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const props = {
            title: this.getAttribute('title' ) ?? 'Title',
            text:  this.getAttribute('text' ) ?? 'text',
            link:  this.getAttribute('link' ) ?? '#',
            image: this.getAttribute('image' ) ?? 'home-widget/assets/widget-1.png',
            socialLinks: this.getAttribute('socialLinks') ?? false,
        }

        HomeWidgetTextCentered.template.innerHTML = HomeWidgetTextCentered.getHTML( props );
        this?.shadowRoot?.append( HomeWidgetTextCentered.template.content.cloneNode(true) );


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

    static observedAttributes = [ 'cssClassName', 'title', 'text' , 'link', 'image', 'socialLinks' ];
    static template = document.createElement('template');

    static getHTML = ({ title, text, link, image , socialLinks }) => (`
        ${ CSS }
        <div class="home-widget-text-center">
            <div class="home-widget-collection">
                <div class="home-widget-collection__item">
                    <div class="home-widget-text-center__text">
                        <span class="widget-title">
                            ${title}
                        </span>
                        <span class="widget-tiny-text">
                            ${text}
                        </span>
                    </div>
                    <img class="home-widget-image" src="${image}" alt="${title}">
                    <a class="home-widget-link" href="${link}"></a>
                </div>
            </div>
            <!--   SOCIAL LINKS  -->
            ${ (socialLinks?.length) ? (`<div class="social-links">
                <ul class="social-links__group">
                    ${ (() =>
                        socialLinks.split('|').reduce( ( result, item) => {  console.log( result )
                            const [ url, text ] = item.split(',');
                            return result += (
                                `<li class="social-links__item">
                                    <a href="${url}" class="social-links__link">${text}</a>
                                </li>`
                            )
                        })
                    )() }
                </ul>
            </div>`) : '' }
            
        </div>
    `);



    connectedCallback() {

    }

    attributeChangedCallback( name, oldVal, newVal ) {
        switch ( name ) {
            case 'text':
                if( HomeWidgetTextCentered.isNewValChanged( newVal, oldVal ) ) console.log( 'text changed' );
                break;
            case 'link':
                if( HomeWidgetTextCentered.isNewValChanged( newVal, oldVal ) )  console.log( 'link changed' );
                break;
        }
    }

    static isNewValChanged = ( newVal, oldVal ) => newVal !== oldVal
}



