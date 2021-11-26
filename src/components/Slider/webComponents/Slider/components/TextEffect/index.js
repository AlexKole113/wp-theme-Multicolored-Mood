class TextEffect {

    constructor( { textContainer , duration }) {
        this.textContainer = textContainer;
        this.prevSlide = 0;
        this.nextSlide = 0;
        this.animatePlugin = anime;
        this.duration = duration * 1000 * .8;
        this.animate();
    }

    _hideEffect = (textWrapper) => {
        this.animatePlugin.timeline({loop: false})
            .add({
                targets: textWrapper.querySelectorAll('.letter'),
                translateX: [0,-30],
                opacity: [1,0],
                easing: "easeInExpo",
                duration: this.duration * .34,
                delay: (el, i) => 100 + 30 * i
            })
    }

    _showEffect = (textWrapper , resolve) => {
        this.animatePlugin.timeline({loop: false})
            .add({
                targets:  textWrapper.querySelectorAll('.letter')  ,
                translateX: [40,0],
                translateZ: 0,
                opacity: [0,1],
                easing: "easeOutExpo",
                duration: this.duration,
                delay: (el, i) => 800 + 30 * i,
                complete: () => resolve(true)
            })
    }

    _defaultStyleState = (textWrapper) => {
        textWrapper.querySelectorAll('.letter').forEach((item) => item.style.opacity = '0' )
        textWrapper.querySelectorAll('.letter').forEach((item) => item.style.transform = 'translateX(40px)' )
    }


    animate = () => new Promise((res) => {

        const addSpecialPluginCSSClass = (container, selector) => {
            if( container.querySelector( `${selector} .letter`) ) return container.querySelector( selector );

            const textWrapper = container.querySelector( selector )
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
            return textWrapper;
        }

        for( let i = 0; i < this.textContainer.length; i += 1 ) {
            if (i === this.nextSlide) {
               this._showEffect( addSpecialPluginCSSClass(this.textContainer[i],'.widget-text__excerpt') , res );
               this._showEffect( addSpecialPluginCSSClass(this.textContainer[i],'.widget-text__title') , res);
            } else if ( i === this.prevSlide) {
               this._hideEffect( addSpecialPluginCSSClass(this.textContainer[i],'.widget-text__excerpt') )
               this._hideEffect( addSpecialPluginCSSClass(this.textContainer[i],'.widget-text__title') )
            } else {
               this._defaultStyleState( addSpecialPluginCSSClass(this.textContainer[i],'.widget-text__excerpt') )
               this._defaultStyleState( addSpecialPluginCSSClass(this.textContainer[i],'.widget-text__title') )
            }
        }
    }) ;

    next = (next) => {
        this.prevSlide = this.nextSlide;
        this.nextSlide = next;
        return this.animate();
    }
}

export default TextEffect;
