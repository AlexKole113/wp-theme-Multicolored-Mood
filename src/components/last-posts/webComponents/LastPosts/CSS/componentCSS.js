const CSS = `
        <style>        
            :host .last-posts {
                --background-color: #242424;
                --color: #fff;
                --loading-color: #9F9F9F;
                background-color: var(--background-color);
                color: var(--color);
                padding: 2.5rem 1.65rem;
            }
            :host .last-posts__title {
                margin: 0;
                margin-bottom: 3.5rem;
              
            }
            :host .last-posts__group {
            
            }
            :host .last-posts__item,
            :host .last-posts__item__loading {
                display: grid;
                grid-template-columns: 3rem 1fr;
                margin-bottom: 2.7rem;
            }
            :host .last-posts__item__loading {
                animation: loading 3s infinite;
            }
            :host .last-posts__item_img {
                height: 3rem;
            }
            :host .last-posts__item_img__loading {
                border-radius: 100%;
                width: 100%;
                height: 3rem;
                background-color: var(--loading-color);
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
                background-color: var(--loading-color);
                border-radius: 5px;
            }
            :host .last-posts__item_text_title__loading_2 {
                width: 50%;
                margin: .5rem 0;
               
            }
            :host .last-posts__item_text_date {
            
            }
            @keyframes loading {
                0% { opacity: .5}
                50% { opacity: .1}
                100% { opacity: .5}    
            }
        </style>
    `;

export default CSS;
