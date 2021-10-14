
const HTML = ({title, excerpt, link, linkText, titleSize, imageURL}) => {
    return (`
    <div style="background-image: url(${imageURL})" class="top-post">
         <span class="widget-title text-morph ${titleSize}">
            ${title}  
             <span class="widget-excerpt">
                ${excerpt}
            </span>    
            <a class="widget-link" href="${link}">
                <span class="widget-link__text">${linkText}</span> 
                <svg class="widget-link__icon" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path></svg>
            </a>  
        </span>
             
    </div>
    `)
};

export default HTML;
