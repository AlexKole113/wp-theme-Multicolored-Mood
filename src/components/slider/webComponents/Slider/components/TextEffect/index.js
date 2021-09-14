class TextEffect {
    constructor( { textContainer , duration }) {
        this.textContainer = textContainer;
        this.morphTime = duration * 1000;
        this.prevSlide = 0;
        this.nextSlide = 0;
        this.animate();
    }

    _hideEffect = (item, fraction) => {
        fraction = 1 - fraction;
        item.style.filter  = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        item.style.opacity = `${Math.pow(fraction, 0.2) * 100}%`;
    }

    _showEffect = (item, fraction) => {
        fraction = Math.cos(fraction * Math.PI) / -2 + .5;
        item.style.filter  = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        item.style.opacity = `${Math.pow(fraction, 0.2) * 100}%`;
    }

    _doMorph = (time) => {
        this.fraction =  ( 1 - ((time + this.morphTime) - Date.now()) / this.morphTime ).toFixed(3);
        this.textContainer.forEach((item, index ) => {
            if( index === this.nextSlide ) {
                this._showEffect(this.textContainer[this.nextSlide],this.fraction)
            }else if( index === this.prevSlide){
                this._hideEffect(item,this.fraction);
            } else {
                item.style.opacity = `0`;
            }
        } );
    }

    animate = () => new Promise((res) => {
        let time = Date.now();
        const work = () => {
            this._doMorph(time);
            if( Date.now() > time + this.morphTime ){
                window.cancelAnimationFrame(rAf);
                this.prevSlide = this.nextSlide;
                res(true);
            } else {
                requestAnimationFrame(work);
            }
        }
        let rAf = window.requestAnimationFrame(work);
    }) ;

    next = (next) => {
        this.nextSlide = next;
        return this.animate();
    }
}

export default TextEffect;
