import HomeWidgetTextCentered from "./home-widget/scripts/HomeWidgetTextCentered.js";
import HomeWidgetTextLeft from "./home-widget/scripts/HomeWidgetTextLeft.js";



customElements.define( 'home-widget-centered',  HomeWidgetTextCentered );
customElements.define( 'home-widget-left',  HomeWidgetTextLeft );
document?.querySelector('HomeWidget')?.addEventListener('activate', (e)=>{  console.log(e) })

