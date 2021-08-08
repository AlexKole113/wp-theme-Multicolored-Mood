const HTML = (title) => (`
<div class="home-widget-posts">
    <div class="home-widget-posts__title">
        <span>${title}</span>
    </div>
    <slot name="posts"></slot>         
</div>
`);

export default HTML;
