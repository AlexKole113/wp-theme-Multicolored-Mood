const CSS = `
        <style>        
            :host .home-widget-collection {
                position: relative;
                padding-right: 2.5rem;
                height: 100%;
            }          
            :host .home-widget-text-center {
                position: relative;
                height: 100%;
                overflow: hidden;
            }
            :host .home-widget-collection__item,
            :host .home-widget-image {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
            }
            :host .home-widget-collection__item {
                display: grid;
                place-content: center;
            }
            :host .home-widget-image {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
            :host .home-widget-text-center__text {
                color: var(--text-white);
                position: relative;
                width: calc(100vw - 5rem);
                margin: auto;
                display: flex;
                flex-flow: column;
                align-items: center;
                z-index: 1;
            }
            :host .widget-title {
                text-align: center;
                font-size: 1.75rem;
                font-weight: 700;
                letter-spacing: .75px;
                margin-bottom: .2rem;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            :host .widget-tiny-text {
                text-align: center;
                letter-spacing: -0.5px;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100%;
                text-align: center;
                padding-left: 10px;
                font-size: 1.09rem;
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
            @media (min-width: 1024px) {
               
                :host .home-widget-collection {
                    padding-right: 0;
                }
                :host .home-widget-collection__item {
                    display: block;
                }
                :host .home-widget-text-center__text {
                    width: calc( 100% - var(--page-padding) );
                    justify-content: center;
                    padding-top: 1.65rem;
                }                                    
                :host .widget-title {
                    text-align: center;
                    padding-left: 10px;
                     font-size: 2.2rem;
                }           
                :host .widget-tiny-text {
                    width: 100%;
                    text-align: center;
                    padding-left: 10px;
                    font-size: 1.09rem;
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
