import './style.css';

import MainMenu from "./components/MainMenu/scripts/MainMenu";

// WebComponents
import Slider from "./components/Slider/webComponents/Slider/index.js";
import TopPost from "./components/TopPost/webComponents/TopPost/index.js";
import LastPosts from "./components/LastPosts/webComponents/LastPosts/index.js";



// WebComponents init
customElements.define( 'slider-component',  Slider );
customElements.define( 'top-post-component',  TopPost );
customElements.define('last-posts-component', LastPosts );
document?.querySelector('HomeWidget')?.addEventListener('activate', (e)=>{ e.preventDefault();  console.log(e) })

//Components
const mainMenu = new MainMenu({menu: document.querySelector('.main-menu__container'), button: document.querySelector('.main-menu__hamburger-slot')})
mainMenu.init();
