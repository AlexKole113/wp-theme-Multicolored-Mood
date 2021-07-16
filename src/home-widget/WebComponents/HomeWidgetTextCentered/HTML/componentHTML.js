import socialLink from "./socialLink.js";
import slideText from "./slideText.js";

const HTML = ( items , socialLinks ) => {
    const smLinks = socialLinks.reduce(( accum, item ) => accum + socialLink( item ),'');
    const text  = items.reduce(( accum, item ) => accum + slideText(item),'');
    return (`
    <div class="home-widget-text-center">
    <div class="home-widget-collection">
        ${text}
    </div>
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
