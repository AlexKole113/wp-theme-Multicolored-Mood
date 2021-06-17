class MenuEffect {

    constructor() {
        this.imageDecoration = new Image();
        this.imageDecoration.src   = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2736535/smoke.png';
    }

    init = ( canvas ) => {
        let ctx = canvas.getContext("2d");
        let counter = 0;
        let stop = 300;
        const draw = () => {
            counter++;
            ctx.beginPath();
            ctx.drawImage(
                this.imageDecoration,
                -window.innerWidth  * .25  * Math.random(),
                -window.innerHeight * .25  * Math.random(),
                counter * 25,
                counter * 25
            );
            ctx.stroke();
            if( counter < stop ) window.requestAnimationFrame( draw )
            console.log(counter)
        }
        window.requestAnimationFrame( draw )

    }
}

export default MenuEffect;
