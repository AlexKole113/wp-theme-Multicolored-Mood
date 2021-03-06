const CSS = `
        <style> 
            :host  canvas {
                background: transparent;
                max-height: 100%!important;
                max-width: 100%!important;
            } 
            :host  svg {
                display: none;
            }               
            :host .home-widget {
                --font-color: #fff;
                --title-size:2rem;
                --link-size:1rem;
                --excerpt-size:.75rem;
                position: relative;
                height: 100%;
                overflow: hidden;
            }     
            :host .home-widget-container {
                position: relative;
                height: 100%;
            }       
            :host .home-widget-collection-text {
                 position: absolute;
                 top:0;
                 right: 0;
                 bottom: 0;
                 left:0;
            }
            :host .widget-text {
                display: block;
                color: var(--font-color);
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;  
                text-align: center;
                font-size: var(--title-size);
                font-weight: 700;
                letter-spacing: .75px;
                margin-bottom: .2rem;     
                text-overflow: ellipsis;
                white-space: nowrap;
                padding-top: 2.75rem;
            }  
            :host .widget-text__excerpt {
                display: block;
                font-weight: 500;
                margin-top: .5rem;
                font-size: var(--excerpt-size)
            }         
            :host .widget-link {
                font-weight: 500;
                color: var(--font-color);   
                text-decoration: none;     
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 1rem auto 0;
            }
            :host .widget-link__text {
                margin-right: .5rem;
                font-size: var(--link-size); 
            }
            :host .widget-link__icon {
                display: inline;
                color: var(--text-white);
                height: var(--link-size); 
            }  
            :host .dots-container {
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 4.25rem;
            }
            :host .dots-item {
                width: 24px;
                height: 24px;
                border-radius: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 .5rem;
                position: relative;
                border: 1px solid var(--text-white);
            } 
            :host .dots-item circle {
              fill: rgba(221,221,221,0.32);
              stroke: var(--text-white);
              stroke-width: 20;
              stroke-dasharray: 0 64;
              transition: stroke-dasharray .3s ease;
            }
            :host .dots-item svg {
              margin: 0;
              transform: rotate(-90deg);
              background: transparent;
              border-radius: 50%;
              display: block;
            }  
                  
            @media (min-width: 1024px) {              
                :host .home-widget-container {
                    padding-right: 0;
                    height: 100%;
                    width: 100%;
                }                                                           
                :host  .widget-title {                                           
                    font-size: 3.45rem;
                    padding-top: 1.5rem;
                }                                                        
                :host .dots-container {
                    bottom: 1.15rem;
                }
                :host .dots-item {
                    width: 24px;
                    height: 24px;
                    cursor: pointer;
                }
            }
        </style>
`;

export default CSS;
