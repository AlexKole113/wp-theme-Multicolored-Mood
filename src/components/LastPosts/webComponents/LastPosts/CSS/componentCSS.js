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
            @media ( min-width: 1024px ) {
                :host .last-posts {
                     height: 100%;
                     padding: 1.5rem 2.95rem 1.25rem;
                }
                 :host .last-posts__title {
                    margin: 0;
                    margin-bottom: 1.5rem;
                }
                :host .last-posts__group {
                    padding-left: .3rem;
                }
            }
        </style>
    `;

export default CSS;
