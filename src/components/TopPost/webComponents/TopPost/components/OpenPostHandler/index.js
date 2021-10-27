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

        // DELETE (its for testing)
        this.parent?.shadowRoot.querySelector('.content').addEventListener('click',()=>{
            console.log('click')
            this._do('END')
        } )
    }

    start = () => {
        this.state = {
            ...this.state,
            isActive: true
        }
        this.parent.dispatchEvent( new CustomEvent( 'open-post', { cancelable:true } ) );

        //TEST
        console.log('OPEN POST WINDOW');
        this.parent?.shadowRoot.querySelector('.top-post').classList.add('is-open')

    }

    stop = () => {
        this.state = {
            ...this.state,
            isActive: false
        }

        //TEST
        console.log('CLOSE POST WINDOW');
        this.parent?.shadowRoot.querySelector('.top-post').classList.remove('is-open')
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
