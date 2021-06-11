const HTML = (cssClassName, title, text, link, image , sliderController ) => (`
<div class="home-widget-text-left ${cssClassName}">
    <div class="home-widget-collection">
        <div class="home-widget-collection__item">
            <div class="home-widget-text-left__text">
                <span class="widget-title">
                   ${title}
                </span>
                <span class="widget-tiny-text">
                   ${text}
                </span>
            </div>
            <img class="home-widget-image" src="${image}" alt="">
            <a class="home-widget-link" href="${link}"></a>
        </div>
    </div>
    ${
        sliderController ? (
            `<div class="home-widget-slider-mob__elements">
                <ul class="dots">
                    <li class="dots__item active-dot">
                        <a class="dots__item_link" href="#"></a>
                    </li>
                    <li class="dots__item">
                        <a class="dots__item_link" href="#"></a>
                    </li>
                    <li class="dots__item">
                        <a class="dots__item_link" href="#"></a>
                    </li>                                               
                </ul>
            </div>`
        ) : ''
    }
</div>
`);

export default HTML;
