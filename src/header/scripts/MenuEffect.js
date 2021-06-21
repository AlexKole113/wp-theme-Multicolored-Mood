class MenuEffect {

    constructor() {
        this.imageDecoration = new Image();
        this.imageDecoration.src   = 'header/assets/smoke.png';
    }

    init = ( canvas ) => {
        this.maxFrames = 100;
        let ctx = canvas.getContext("2d");
        let counter = 0;
        const draw = () => {
            counter++;
            ctx.beginPath();
            ctx.drawImage(
                this.imageDecoration,
                Math.round(window.innerWidth * -.075 * Math.random()   ),
                Math.round( window.innerHeight * -.075 * Math.random() ),
                window.innerWidth  * .02  * counter,
                window.innerHeight * .02  * counter,
            );
            ctx.stroke();
            if( counter < this.maxFrames ) window.requestAnimationFrame( draw )
            console.log(Math.round(window.innerWidth * Math.random()   ), Math.round( window.innerHeight * Math.random() ))
        }
        this.requestAnimationFrameID = window.requestAnimationFrame( draw )

    }

    destroy = () => {
        this.maxFrames = 0;
        window.cancelAnimationFrame(this.requestAnimationFrameID);

    }
}

export default MenuEffect;
