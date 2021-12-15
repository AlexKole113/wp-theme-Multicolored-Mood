const HTML = ({title, posts}) => {
   const postCollection = posts.reduce((html,id) => html + `<last-post-item id="${id}"></last-post-item>` ,'')
   return (`
        <div class="last-posts">
            <h4 class="last-posts__title">${title}</h4>
            <div class="last-posts__group">
                ${postCollection}
            </div>  
        </div>          
    `)
} ;

export default HTML;
