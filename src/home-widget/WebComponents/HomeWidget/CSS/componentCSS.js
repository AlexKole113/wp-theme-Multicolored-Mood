const CSS = `
        <style>           
            :host .home-widget {
                --font-color: #fff;
                position: relative;
                height: 100%;
                overflow: hidden;
            }     
            :host .home-widget-container {
                position: relative;
                padding-right: 2.5rem;
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
                color: var(--font-color);
                position: absolute;
                top: 6%;
                left: 20%;
                width: 60%;  
                text-align: center;
                font-size: 1.75rem;
                font-weight: 700;
                letter-spacing: .75px;
                margin-bottom: .2rem;     
                text-overflow: ellipsis;
                white-space: nowrap;
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
            :host canvas {
                max-height: 100%!important;
                max-width: 100%!important;
            }                    
            @media (min-width: 1024px) {              
                :host .home-widget-container {
                    padding-right: 0;
                }                                                           
                :host .widget-title {                        
                    text-align: center;
                    font-size: 2.25rem;
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
