// WebComponents
import HomeWidget from "./home-widget/WebComponents/HomeWidget/index.js";
import HomeWidgetTextLeft from "./home-widget/WebComponents/HomeWidgetTextLeft/index.js";
import HomeWidgetPosts from "./home-widget/WebComponents/HomeWidgetPosts/index.js";

// TODO: try to replace Three.js instead PIXI

//Menu
import MobileMenu from "./header/scripts/menu.js";

// WebComponents init
customElements.define( 'home-widget',  HomeWidget );
customElements.define( 'home-widget-left',  HomeWidgetTextLeft );
customElements.define('home-widget-posts', HomeWidgetPosts );
document?.querySelector('HomeWidget')?.addEventListener('activate', (e)=>{ e.preventDefault();  console.log(e) })

// Theme Components init
new MobileMenu().init();

