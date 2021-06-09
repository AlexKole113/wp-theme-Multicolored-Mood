const CSS = `
        <style>        
            :host .home-widget-collection {
                position: relative;
                padding-right: 2.5rem;
                height: 100%;
            }             
            :host .home-widget-text-left {
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
            :host .home-widget-text-left__text {
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
                text-align: center;

            }
            :host .widget-tiny-text {
                text-align: center;
                font-size: 1.18rem;
                letter-spacing: -0.5px;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100%;
                text-align: center;
            }
            :host .home-widget-slider-mob__elements {
                position: absolute;
                top: -33.334vh;
                bottom: -33.334vh;
                right: 0;
                width: 2.5rem;
                background: var(--back-pure-white);
                z-index: 5;
            }
            :host .dots {
                padding: 0;
                list-style: none;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            :host .dots__item {
                position: relative;
                display: block;
                width: 1rem;
                height: 1rem;
                border-radius: 100%;
                border: 1px solid var(--text-light-gray);
            }
            :host .dots__item_link {
                position: absolute;
                display: block;
                border-radius: 100%;
                background: var(--text-light-gray);
                top: 2px;
                right: 2px;
                bottom: 2px;
                left: 2px;
                opacity: .3;
            }
            :host .active-dot .dots__item_link {
                opacity: 1;
            }
            :host .home-widget-slider-mob__elements .dots {
                flex-flow: column;
                height: 100%;
            }
            :host .home-widget-slider-mob__elements .dots .dots__item {
                margin-bottom: .85rem;
            }          
            @media (min-width: 1024px) {
                :host .home-widget-slider-mob__elements {
                    display: none;
                }
                :host .home-widget-collection {
                    padding-right: 0;
                }
                :host .home-widget-collection__item {
                    display: block;
                }
                :host .home-widget-text-left__text {
                    width: calc( 100% - var(--page-padding) );
                    justify-content: flex-start;
                    margin-top: var(--page-padding);
                    margin-left: var(--page-padding);
                }                                                   
                :host .widget-title {
                    text-align: left;
                    font-size: 2.2rem;
                }          
                :host .widget-tiny-text {
                    width: 100%;
                    text-align: left;
                }                      
            }
        </style>
`;

export default CSS;
