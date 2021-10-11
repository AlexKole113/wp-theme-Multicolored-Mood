import './style.css';

// WebComponents
import Slider from "./components/slider/webComponents/Slider/index.js";
import TopPost from "./components/top-post/webComponents/TopPost/index.js";
import LastPosts from "./components/last-posts/webComponents/LastPosts/index.js";

//Menu
//import MobileMenu from "./header/scripts/menu.js";

// WebComponents init
customElements.define( 'slider-component',  Slider );
customElements.define( 'top-post-component',  TopPost );
customElements.define('last-posts-component', LastPosts );
document?.querySelector('HomeWidget')?.addEventListener('activate', (e)=>{ e.preventDefault();  console.log(e) })

// Theme Components init
//new MobileMenu().init();

