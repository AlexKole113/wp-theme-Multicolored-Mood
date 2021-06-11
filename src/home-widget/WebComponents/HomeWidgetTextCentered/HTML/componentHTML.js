const HTML = ( title, text, link, image , socialLinks ) => (`
<div class="home-widget-text-center">
    <div class="home-widget-collection">
        <div class="home-widget-collection__item">
            <div class="home-widget-text-center__text">
                <span class="widget-title">
                    ${title}
                </span>
                <span class="widget-tiny-text">
                    ${text}
                </span>
            </div>
            <img class="home-widget-image" src="${image}" alt="${title}">
            <a class="home-widget-link" href="${link}"></a>
        </div>
    </div>
    <!--   SOCIAL LINKS  -->
    ${ (socialLinks?.length) ? 
        (`<div class="social-links">
                <ul class="social-links__group">
                    ${ (() => socialLinks
                                .split('|')
                                .reduce( ( result, item) => { 
                                            const [ url, text ] = item.split(',');
                                            return result += (
    `                                                            <li class="social-links__item">
                                                                    <a href="${url}" class="social-links__link">${text}</a>
                                                                  </li>`
                                                             )
                                          })
            
                        )() 
                    }
                </ul>
            </div>`) : '' }         
        </div>
`);

export default HTML;
