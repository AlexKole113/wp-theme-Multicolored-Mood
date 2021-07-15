const slide = ({title,text,imageUrl}) =>
    (`<div class="home-widget-collection__item">
        <div class="home-widget-text-center__text">
            <span class="widget-title">
                ${title}
            </span>
            <span class="widget-tiny-text">
                ${text}
            </span>
        </div>
        <img class="home-widget-image" src="${imageUrl}" alt="${title}">
        <a class="home-widget-link" href="#"></a>
    </div>`);

export default slide;
