const componentContentCSS = `
<style> 
    :host * {
        box-sizing: border-box;
    }
    :host .content {
        --transition-timing: .4s;
        --transition-line: ease-in-out;
        transition: width .4s var(--transition-line),                           
                    transform .4s var(--transition-line),    
                    opacity .4s var(--transition-line) .3s;
        position: fixed;
        display: flex;
        flex-flow: column;
        top:0;
        right:0;
        height: 100vh;
        width: 0;
        z-index: 1000;
        transform: translateX(120vw);
        opacity: 0;
        overflow: scroll;
        background-color: var(--back-pure-black);
    }
    :host .content:after {
        content: ' ';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left:0;
        background: #000000;
        background-size: 300%;
        transition: background-size .3s var(--transition-line);      
    }
    :host .content__image {
        order: -1;
        width: 100%;
        z-index: 1;
    }
    :host .content__image img {
        width: 100%;
        height: 21.5rem;
        object-fit: cover;
        transform: scale(1.25) rotate(12deg);  
        transition: transform .3s ease-in-out .3s;    
    }
    :host .is-open .content {
        width: 125vw;
        opacity: 1;
        transform: translateX(0); 
    }    
    :host .is-open .content:after {
        background-size: 100%;       
    }
    :host .content__text {
        position: relative;
        z-index: 5;
        color: var(--text-white);
        padding: 2.5rem 1rem 10rem 26%;
    }
    :host .is-open .content__image img {
         transform: scale(1) rotate(0deg);   
    }
    :host .back-link--top {
        position: absolute;
        top: calc((21.5rem - 2.5rem) * -1);
        left: 26%;
        color: var(--text-white);
        text-decoration: none;
        font-size: .9rem;
        letter-spacing: .5px;
        display: flex;
        align-items: center;
    } 
    :host .back-link--bottom {
        position: absolute;
        bottom: 2.5rem;
        left: 26%;
        color: var(--text-white);
        text-decoration: none;
        display: flex;
        align-items: center; 
    }
    :host .back-link--top svg,
    :host .back-link--bottom svg {
        transform: rotate(180deg);
        margin-right: .5rem;
    }
    @media (min-width: 1024px) {
        :host .content  {
             display: grid;
             grid-template-columns: 50% 50%;
        }
        :host .content:after {
            z-index: 4;
        } 
        :host .content__text { 
            padding: 8rem 4rem;
            padding-left: 46%;
            max-height: 100vh;
        }
        :host .content__image {
            order: unset;
        }
        :host .content__image img {
            height: 100%;
        }
        :host .content:after {
             background: linear-gradient(90deg, transparent 0%, #000000 20%, #000000fa 55%, transparent 100%);
        }
        :host .back-link--top {
             top: 2.65rem;
             left: 45%;
        }
        :host .back-link--bottom { 
             left: 45%;
             bottom: 2.65rem;
        }
    }
</style>
`;
export default componentContentCSS;
