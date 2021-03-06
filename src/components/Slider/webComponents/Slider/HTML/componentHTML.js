import slideText from "./slideText.js";

const HTML = ({ textAlignment, data:{items} }) => {
    const text  = items.reduce(( accum, item ) => accum + slideText(item),'');
    return (`
    <div class="home-widget home-widget-text-${textAlignment}">
        <div class="home-widget-container">
            <div class="home-widget-collection-text">
                ${text}
            </div> 
            <div class="dots-container"></div>    
        </div>                
    </div>
    `)
};

export default HTML;
