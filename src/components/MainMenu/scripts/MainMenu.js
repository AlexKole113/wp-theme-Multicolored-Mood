import mainMenuHoverEffect from "./components/TextHoverEffect";

class MainMenu {

    _validate = () => {
        if (!this.menu || !this.button) {
            return false;
        }

        return true;
    }

    constructor({ menu, button }) {
        this.menu = menu;
        this.button = button;
    }

    buttonClickHandler = () => {
        if ( document.body.classList.contains('menu-open') ) {
            new Promise((res)=>{
                document.body.classList.remove('menu-open')
                document.body.classList.add('menu-closing')
                setTimeout(()=>{
                    res(null)
                },1200)
            }).then(()=>{
                document.body.classList.remove('menu-closing')
            })
        } else {
            document.body.classList.add('menu-open')
        }
    }

    init = () => {
        if (this._validate()) {
            this.button.addEventListener( 'click', this.buttonClickHandler );
            mainMenuHoverEffect();
        }
    }

}

export default MainMenu;
