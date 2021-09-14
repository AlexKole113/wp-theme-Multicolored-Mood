const slideText = ({title, text, linkTo }) =>
    (`
    <span class="widget-title text-morph">
        ${title}  
         <span class="widget-excerpt">
            ${text}
        </span>    
        <a class="widget-link" href="${linkTo}">more ></a>  
    </span>
    
`);

export default slideText;
