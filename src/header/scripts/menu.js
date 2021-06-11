import EventBus from "../../scripts/EventBus.js";

export default class MobileMenu extends EventBus {

    static statement = 'closed';

    _error = ( item ) => {throw new Error(`MobileMenu Component error. Not all elms received!`)};

    _openMenu = () => {
        document.body.classList.add('mobile-menu-activated')
        this._canvasElement = document.createElement("canvas");
        this._canvasElement.setAttribute('id', 'main-menu-canvas')
        this._mainMenu.prepend(this._canvasElement);
    }

    _closeMenu = () => {
        document.body.classList.remove('mobile-menu-activated')
    }

    validateComponents = () => {
        const { _menuStarter, _mainMenu } = this;
        if( !_menuStarter || !_mainMenu ) this._do('ERROR' );
    }

    constructor() {
        super();
        this._on('ERROR', this._error );
        this._on('START', this._openMenu );
        this._on('END', this._closeMenu )
    }

    init = () => {
        this._menuStarter = document.querySelector('#menu-starter');
        this._mainMenu    = document.querySelector('#main-menu');

        this.validateComponents();

        this._menuStarter.addEventListener('click', (event) => {
            event.preventDefault();

            if ( MobileMenu.statement === 'closed' ) {
                MobileMenu.statement = 'opened';
                const e = new CustomEvent( 'menu-open', { cancelable:true } );
                this._menuStarter.dispatchEvent(e)
            } else {
                MobileMenu.statement = 'closed';
                const e = new CustomEvent('menu-close', { cancelable:true } );
                this._menuStarter.dispatchEvent(e)
            }

        })

        this._menuStarter.addEventListener( 'menu-open', () => { this._do('START' ) } );
        this._menuStarter.addEventListener( 'menu-close', () => { this._do('END' ) } );

    }


}
