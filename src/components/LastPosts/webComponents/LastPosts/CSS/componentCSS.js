const CSS = `
        <style>        
            :host .last-posts {
                --background-color: #242424;
                --color: #fff;
                --loading-color: rgba(159,159,159,0.5);
                background-color: var(--background-color);
                color: var(--color);
                padding: 2.5rem 1.65rem 1.25rem;
            }
            :host .last-posts__title {
                margin: 0;
                margin-bottom: 3.5rem;
            }
            :host .last-posts__item,
            :host .last-posts__item__loading {
                display: grid;
                grid-template-columns: 3rem 1fr;
                margin-bottom: 2.7rem;
            }
            :host .last-posts__item_img {
                height: 3rem;
            }
            :host .last-posts__item_img__loading {
                border-radius: 100%;
                width: 100%;
                height: 3rem;
            }
            :host .last-posts__item_img img {
                border-radius: 100%;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            :host .last-posts__item_text {
                padding-left: .7rem;
                display: flex;
                flex-flow: column;    
            }
            :host .last-posts__item_text_title {
                font-size: .81rem;
                text-decoration: none;
                color: var(--color);
            }
            :host .last-posts__item_text_title__loading,
            :host .last-posts__item_text_title__loading_2 {
                width: 100%;
                height: 1rem;
                border-radius: 5px;
            }
            :host .last-posts__item_text_title__loading {
                 animation: loading 2s .5s infinite;  
            }
            :host .last-posts__item_text_title__loading_2 {
                width: 50%;
                margin: .5rem 0; 
                 animation: loading 2s infinite;  
            }
            :host .last-posts__item_img__loading,
            :host .last-posts__item_text_title__loading,
            :host .last-posts__item_text_title__loading_2 {
                background-color:  var(--loading-color);
            }
            @keyframes loading {
                0% { width: 80% }
                50% { width: 100% }
                100% { width: 80% }    
            }
            
            
            @media ( min-width: 1024px ) {
                :host .last-posts {
                     height: 100%;
                     padding: 1.5rem 2.95rem 1.25rem;
                }
                 :host .last-posts__title {
                    margin: 0;
                    margin-bottom: 1.5rem;
                }
                :host .last-posts__item_text_title {
                    font-size: .71rem;
                }
                :host .last-posts__item,
                :host .last-posts__item__loading {
                    display: grid;
                    grid-template-columns: 2.85rem 1fr;
                    margin-bottom: 1.25rem;
                }
                :host .last-posts__group {
                    padding-left: .3rem;
                }
                :host .last-posts__item_img {
                    height: 2.85rem;     
                }
                :host .last-posts__item_text {
                        align-items: center;
                        justify-content: center;
                }
            }
        </style>
    `;

export default CSS;
