import HomeWidgetTextCentered from "./home-widget/WebComponents/HomeWidgetTextCentered/index.js";
import HomeWidgetTextLeft from "./home-widget/WebComponents/HomeWidgetTextLeft/index.js";
import HomeWidgetPosts from "./home-widget/WebComponents/HomeWidgetPosts/index.js";


customElements.define( 'home-widget-centered',  HomeWidgetTextCentered );
customElements.define( 'home-widget-left',  HomeWidgetTextLeft );
customElements.define('home-widget-posts', HomeWidgetPosts );
document?.querySelector('HomeWidget')?.addEventListener('activate', (e)=>{  console.log(e) })

