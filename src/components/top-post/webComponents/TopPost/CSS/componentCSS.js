const CSS = `
        <style>           
            :host .top-post {
                --font-color: #fff;
                --title-size:2rem;
                --link-size:1rem;
                --excerpt-size:.75rem;
                position: relative;
                min-height: 23.35rem;
                background-size: cover;
                display: flex;
                flex-flow: column;
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
        </style>
`;

export default CSS;
