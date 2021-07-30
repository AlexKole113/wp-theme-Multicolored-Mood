// WebComponents
import HomeWidget from "./home-widget/WebComponents/HomeWidget/index.js";
import HomeWidgetTextLeft from "./home-widget/WebComponents/HomeWidgetTextLeft/index.js";
import HomeWidgetPosts from "./home-widget/WebComponents/HomeWidgetPosts/index.js";

//TODO: Stage 1 - FrontEnd
// 1. Complete Webcomponents
//    1.1 Slider functionalities
//    1.2 Try to replace Three.js instead PIXI
//    1.3 Open Information functionalities
//    1.4 Speed optimization
//    1.5 Refactoring
// 2. Create pages
//    2.1 Archive
//    2.2 Post, Page
//    2.3 Other - 404, Search etc.
//    2.4 Refactoring
// 3. Cypress
//    3.1 Cypress testing
// 4. Fixing

//Menu
import MobileMenu from "./header/scripts/menu.js";

// WebComponents init
customElements.define( 'home-widget',  HomeWidget );
customElements.define( 'home-widget-left',  HomeWidgetTextLeft );
customElements.define('home-widget-posts', HomeWidgetPosts );
document?.querySelector('HomeWidget')?.addEventListener('activate', (e)=>{ e.preventDefault();  console.log(e) })

// Theme Components init
new MobileMenu().init();

