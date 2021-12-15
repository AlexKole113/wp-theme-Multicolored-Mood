const CSS = `
        <style>        
            :host .last-posts__item,
            :host .last-posts__loading {
                display: grid;
                grid-template-columns: 3rem 1fr;
                margin-bottom: 2.7rem;
            }
            :host .last-posts__item-img {
                height: 3rem;
            }
            :host .last-posts__loading {
                border-radius: 100%;
                width: 100%;
                height: 3rem;
            }
            :host .last-posts__item-img img,
            :host .last-posts__loading-img {
                border-radius: 100%;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            :host .last-posts__item-text,
            :host .last-posts__loading-text {
                padding-left: 1.75rem;
                display: flex;
                flex-flow: column;    
            }
            :host .last-posts__item-title {
                font-size: .81rem;
                text-decoration: none;
                color: var(--color);
            }
            :host .last-posts__loading-line-1,
            :host .last-posts__loading-line-2 {
                width: 100%;
                height: 1rem;
                border-radius: 5px;
            }
            :host .last-posts__loading-line-1 {
                 animation: loading 2s .5s infinite;  
            }
            :host .last-posts__loading-line-2 {
                width: 50%;
                margin: .5rem 0; 
                 animation: loading 2s infinite;  
            }
            :host .last-posts__loading-img,
            :host .last-posts__loading-line-1,
            :host .last-posts__loading-line-2 {
                background-color:  var(--loading-color);
            }
            @keyframes loading {
                0% { width: 80% }
                50% { width: 100% }
                100% { width: 80% }    
            }
            
            
            @media ( min-width: 1024px ) {
                 :host .last-posts__title {
                    margin: 0;
                    margin-bottom: 1.5rem;
                }
                :host .last-posts__item-title {
                    font-size: .71rem;
                }
                :host .last-posts__item,
                :host .last-posts__loading {
                    display: grid;
                    grid-template-columns: 2.85rem 1fr;
                    margin-bottom: 1.25rem;
                }
                :host .last-posts__item-img {
                    height: 2.85rem;     
                }
                :host .last-posts__item-text {
                    align-items: flex-start;
                    justify-content: center;
                    
                }
            }
        </style>
    `;

export default CSS;
