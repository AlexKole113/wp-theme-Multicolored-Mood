// WebComponents
import Slider from "./components/slider/webComponents/Slider/index.js";
import HomeWidget from "./components/top-post-item/webComponents/HomeWidget/index.js";
import HomeWidgetPosts from "./components/last-posts/webComponents/HomeWidgetPosts/index.js";

//Menu
//import MobileMenu from "./header/scripts/menu.js";

// WebComponents init
customElements.define( 'slider-component',  Slider );
customElements.define( 'home-widget',  HomeWidget );
customElements.define('home-widget-posts', HomeWidgetPosts );
document?.querySelector('HomeWidget')?.addEventListener('activate', (e)=>{ e.preventDefault();  console.log(e) })

// Theme Components init
//new MobileMenu().init();

