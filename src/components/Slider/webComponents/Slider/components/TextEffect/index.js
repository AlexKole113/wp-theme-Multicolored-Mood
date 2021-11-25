class TextEffect {

    constructor( { textContainer , duration }) {
        this.textContainer = textContainer;
        this.prevSlide = 0;
        this.nextSlide = 0;
        this.animatePlugin = anime;
        this.animate();
    }

    _hideEffect = (textWrapper) => {
        this.animatePlugin.timeline({loop: false})
            .add({
                targets: textWrapper.querySelectorAll('.letter'),
                translateX: [0,-30],
                opacity: [1,0],
                easing: "easeInExpo",
                duration: 800,
                delay: (el, i) => 100 + 30 * i
            })
    }

    _showEffect = (textWrapper) => {
        this.animatePlugin.timeline({loop: false})
            .add({
                targets:  textWrapper.querySelectorAll('.letter')  ,
                translateX: [40,0],
                translateZ: 0,
                opacity: [0,1],
                easing: "easeOutExpo",
                duration: 2200,
                delay: (el, i) => 800 + 30 * i
            })
    }

    animate = () => new Promise((res) => {
        console.log(this.prevSlide, this.nextSlide)
        for( let i = 0; i < this.textContainer.length; i += 1 ) {
            let textWrapper = this.textContainer[i].querySelector('.widget-text__excerpt')
             textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

            if (i === this.nextSlide) {
               this._showEffect(textWrapper)
            } else if ( i === this.prevSlide) {
               this._hideEffect(textWrapper)
            } else {
                textWrapper.querySelectorAll('.letter').forEach((item) => item.style.opacity = '0' )
                textWrapper.querySelectorAll('.letter').forEach((item) => item.style.transform = 'translateX(40px)' )
            }
        }

        setTimeout(()=>{
            res(true);
        },2000)

    }) ;

    next = (next) => {
        this.prevSlide = this.nextSlide;
        this.nextSlide = next;
        return this.animate();
    }
}

export default TextEffect;
