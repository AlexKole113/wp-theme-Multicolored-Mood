class TextEffect {
    constructor( textContainer ) {
        this.textContainer = textContainer;
        this._textShowingUpdate()
    }

    _textHideEffect = (item) => {
        // const tl = gsap.timeline();
        // const mySplitText = new SplitText(item, {type:"words,chars"});
        // const chars = mySplitText.chars; //an array of all the divs that wrap each character
        // gsap.set(item, {perspective: 400});
        // tl.to(chars, {duration: 1, opacity:0, scale:0, y:60, rotationX: -180,rotationY: 180, transformOrigin:"-50% 50% 0%",  ease:Circ.easeOut, stagger: 0.01}, "-=0");

         item.style.opacity = '0';
    }

    _textShowEffect = (item) => {
        const tl = gsap.timeline();
        const mySplitText = new SplitText(item, {type:"words,chars"});
        const chars = mySplitText.chars; //an array of all the divs that wrap each character
        gsap.set(item, {perspective: 400});
        tl.from(chars, {duration: 1, opacity:0, scale:0, y:30, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.01}, "+=0");

        console.log(item)

        item.style.opacity = '1';
    }

    _textShowingUpdate = ( num = 0 ) => {
        this.textContainer.forEach((item,itemNum)=>{
            if(itemNum !== num ) {
                this._textHideEffect(item)
            } else {
                this._textShowEffect(item)
            }
        })
    }

    effectStart = (num) => {
        this._textShowingUpdate(num)
    }

}

export default TextEffect;
