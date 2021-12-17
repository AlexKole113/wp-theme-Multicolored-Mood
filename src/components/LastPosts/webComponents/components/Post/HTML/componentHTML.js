const HTML = ({title:{rendered:renderedTitle},link}) => (`
         <div class="last-posts__item">
            <div class="last-posts__item-img">
                <img src="https://assets.codepen.io/2736535/trees-3.jpeg" alt="${renderedTitle}">
            </div>
            <div class="last-posts__item-text">
                <a href="${link}" class="last-posts__item-title">${renderedTitle}</a>
            </div>
        </div>`);

export default HTML;
