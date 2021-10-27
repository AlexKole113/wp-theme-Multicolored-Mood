import EventBus from "../../../../../../common/scripts/EventBus";

class OpenPostHandler extends EventBus{

    constructor({parent}) {
        super();
        this.state = {
            isActive : false
        }
        this.parent = parent;
    }

    init = () => {
        this._on('START', this.start );
        this._on('END', this.stop );
    }

    start = () => {
        this.state = {
            ...this.state,
            isActive: true
        }

        console.log('OPEN POST WINDOW');

        // EFFECT CREATE
        this.overlay = document.createElement('div');
        this.overlay.style.position = 'fixed';
        this.overlay.style.overflow = 'hidden';
        this.overlay.style.top = '0';
        this.overlay.style.left = '0';
        this.overlay.style.width = '100vw';
        this.overlay.style.height = '100vh';
        this.overlay.style.zIndex = '1000';
        this.overlay.style.backgroundColor = 'rgba(0,0,0,0.48)';
        this.overlay.onclick = () => {
            this._do('END')
        }
        this.parent.append(this.overlay);

    }

    stop = () => {
        this.state = {
            ...this.state,
            isActive: false
        }

        console.log('CLOSE POST WINDOW');

        // EFFECT remove
        this.overlay.remove();
    }


    toggle = () => {
        if ( this.state.isActive ) {
            this._do('END')
        } else {
            this._do('START')
        }
    }
}

export default OpenPostHandler
