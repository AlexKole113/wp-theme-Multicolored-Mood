export default class EventBus {

    events = new Map([
        ['START',   []],
        ['END',     []],
        ['LOADING', []],
        ['SUCCESS', []],
        ['ERROR',   []]
    ])

    _do = ( event, curThis, args  ) => {

        if( !this.events.get( event ) ) throw new Error( `No  event ${event}` )

        this.events.get( event ).forEach( ( callable ) => {
            if( typeof args !== 'undefined'  ) {
                callable.call( curThis, args )
            } else {
                callable()
            }
        })
    }


    _on = ( event, callback ) => {
        let allFunctionsOnEvent = this.events.get( event );
        if( !allFunctionsOnEvent ) allFunctionsOnEvent = [];

        allFunctionsOnEvent.push( callback );
        this.events.set( event, allFunctionsOnEvent )
    }


}
