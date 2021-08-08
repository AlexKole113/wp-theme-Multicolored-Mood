// WebComponents
import HomeWidget from "./WebComponents/HomeWidget/index.js";
import HomeWidgetPosts from "./WebComponents/HomeWidgetPosts/index.js";

//Menu
import MobileMenu from "./header/scripts/menu.js";

// WebComponents init
customElements.define( 'home-widget',  HomeWidget );
customElements.define('home-widget-posts', HomeWidgetPosts );
document?.querySelector('HomeWidget')?.addEventListener('activate', (e)=>{ e.preventDefault();  console.log(e) })

// Theme Components init
new MobileMenu().init();

