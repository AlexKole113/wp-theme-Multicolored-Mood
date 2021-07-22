const slideText = ({title,text,imageUrl}) =>
    (`<div class="home-widget-collection__item">
        <div class="home-widget-text-center__text">
            <div class="widget-title">
                ${title}
            </div>
            <div class="widget-tiny-text">
                ${text}
            </div>
        </div>
        <a class="home-widget-link" href="#"></a>
    </div>`);

export default slideText;
