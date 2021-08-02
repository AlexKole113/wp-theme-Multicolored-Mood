import socialLink from "./socialLink.js";
import slideText from "./slideText.js";

const HTML = (textAllign, items , socialLinks ) => {
    const smLinks = (socialLinks?.length) ? socialLinks.reduce(( accum, item ) => accum + socialLink( item ),'') : '';
    const text  = items.reduce(( accum, item ) => accum + slideText(item),'');
    return (`
    <div class="home-widget home-widget-text-${textAllign}">
        <div class="home-widget-container">
            <a href="" class="home-widget-collection-text">
                ${text}
            </a>      
        </div>
        <!--   SOCIAL LINKS  -->
        ${ (socialLinks?.length) ? 
            (`<div class="social-links">
                    <ul class="social-links__group">
                        ${ smLinks }
                    </ul>
                </div>`) : '' 
        } 
        <svg id="filters">
            <defs>
                <filter id="threshold">
                    <feColorMatrix in="SourceGraphic"
                                   type="matrix"
                                   values="1 0 0 0 0
                                           0 1 0 0 0
                                           0 0 1 0 0
                                           0 0 0 255 -140" />
                </filter>
            </defs>
        </svg>        
    </div>
    `)
};

export default HTML;
