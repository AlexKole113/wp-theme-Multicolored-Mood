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
                 filter: url(#threshold) blur(0px); 
            }
            :host .widget-title {
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
            :host .widget-excerpt {
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
                width: 1rem;
                height: 1rem;
                border-radius: 100%;
                display: block;
                margin: 0 .5rem;
                position: relative;
                border: 1px solid var(--text-white);
            } 
            :host .dots-item.active-dot:before {
                content: '';
                position: absolute;
                background-color: var(--text-white);
                top: 2px;
                right: 2px;
                bottom: 2px;
                left: 2px;
                border-radius: 100%;
            }               
            @media (min-width: 1024px) {              
                :host .home-widget-container {
                    padding-right: 0;
                    height: 100%;
                    width: 100%;
                }                                                           
                :host  .widget-title {                                           
                    font-size: 2.45rem;
                }  
                :host .widget-excerpt {
                    display: block;
                    font-size: 1rem;
                    font-weight: 800;
     
                } 
                :host .home-widget-text-center .widget-title {
                    text-align: center;    
                } 
                :host .home-widget-text-left .widget-title {
                    text-align: left; 
                    left: 4.25vw;
                }                                                        
                :host .social-links__group {
                    padding: 0;
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
                :host .social-links__item:first-child {
                    margin-top: 2.8rem;
                }
            }
        </style>
`;

export default CSS;
