import slide from "./slide.js";
import socialLink from "./socialLink.js";

const HTML = ( items , socialLinks ) => {
    const smLinks = socialLinks.reduce(( accum, item ) => accum + socialLink( item ),'');
    return (`
    <div class="home-widget-text-center">
    <div class="home-widget-collection"></div>
    <!--   SOCIAL LINKS  -->
    ${ (socialLinks?.length) ? 
        (`<div class="social-links">
                <ul class="social-links__group">
                    ${ smLinks }
                </ul>
            </div>`) : '' 
    }         
        </div>
    `)
};

export default HTML;
