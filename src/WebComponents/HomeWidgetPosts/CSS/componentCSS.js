const CSS = `
        <style>        
            :host .home-widget-posts {
                background: var(--back-light-black);
                height: 100%;
                padding-bottom: 5rem;
            }
            :host .home-widget-posts__title {
                color: var(--text-white);
                padding-top: var(--page-padding);
                padding-left: var(--page-padding);
                font-size: 1.1rem;
                letter-spacing: 1px;
                margin-bottom: 2rem;
            }                           
            @media (min-width: 1024px) {
                :host .home-widget-posts {
                    padding-bottom: 0rem;
                }
            }
        </style>
    `;

export default CSS;
