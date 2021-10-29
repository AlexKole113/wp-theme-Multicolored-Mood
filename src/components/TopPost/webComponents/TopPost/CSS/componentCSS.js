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
                background-position: 50% 50%;
            }       
            :host .home-widget-collection-text {
                 position: absolute;
                 top:0;
                 right: 0;
                 bottom: 0;
                 left:0;
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
           
            :host .content {
                display: grid;
                grid-template-columns: 57% 43%;
                transition: width .4s ease-in-out,                           
                            transform .4s ease-in-out,    
                            opacity .4s ease-in-out;
                position: fixed;
                top:0;
                right:0;
                height: 100vh;
                width: 0;
                z-index: 1000;
                transform: translateX(120vw);
                opacity: 0;
            }
            :host .content:after {
                content: ' ';
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left:0;
                background: linear-gradient(90deg, transparent 0%, #000000 20%, #000000 60%, rgba(0,0,0,0.02) 90%);
                background-size: 300%;
                transition: background-size .4s ease-in-out .2s;      
            }
            :host .is-open .content {
                width: 125vw;
                opacity: 1;
                transform: translateX(0); 
            }    
            :host .is-open .content:after {
                background-size: 100%;       
            }
            :host .content__image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transform: scale(1.2) rotate(10deg);  
                transition: transform .4s ease-in-out .4s;    
            }
            :host .is-open .content__image img {
                 transform: scale(1) rotate(0deg);   
            }
            
            @media (min-width: 1024px) {
                :host .top-post {
                    height: 100%;
                    min-height: 100%;
                    position: relative;
                }
                :host .widget-title {
                    padding-top: 1.5rem;
                    text-align: left;
                    left: 2.5rem;
                    font-size: 1rem;
                }
                :host .widget-title.big {
                   padding-top: 2rem;
                   font-size: 2.5rem;
                }
                
                :host .widget-link {
                    position: absolute;
                    right: 3rem;
                    bottom: 1rem;        
                }
            }   
        </style>
`;

export default CSS;
