import slideText from "./slideText.js";

const HTML = (textAlign = 'center' , items ) => {
    const text  = items.reduce(( accum, item ) => accum + slideText(item),'');
    return (`
    <div class="home-widget home-widget-text-${textAlign}">
        <div class="home-widget-container">
            <div class="home-widget-collection-text">
                ${text}
            </div> 
            <div class="dots-container"></div>    
        </div> 
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
