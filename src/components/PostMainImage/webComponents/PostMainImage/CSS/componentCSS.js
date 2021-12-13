const CSS = `
        <style> 
            :host canvas {
                background: transparent;
                max-height: 100%!important;
                max-width: 100%!important;
            }              
            :host .widget {
                --font-color: #fff;
                --title-size:2rem;
                --link-size:1rem;
                --excerpt-size:.75rem;
                position: relative;
                height: 21.75rem;
                overflow: hidden;
            }     
            :host .widget-container {
                position: relative;
                height: 100%;
            }       
            @media (min-width: 1024px) {              
                :host .widget-container {
                    padding-right: 0;
                    height: 100%;
                    width: 100%;
                }  
                :host .widget {
                      height: 100%;
                }                                                        
            }
        </style>
`;

export default CSS;
