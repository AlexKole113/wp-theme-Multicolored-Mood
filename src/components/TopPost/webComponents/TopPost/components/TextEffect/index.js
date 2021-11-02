class TextEffect {
    constructor({parent, classNameTextContainer}) {
        if( !gsap ) {
            throw new Error('Need GSAP');
        }
        this.gsap = gsap;
        this.textContainer = parent.querySelector(classNameTextContainer);
    }

    init = () => {
        this.tl = gsap.timeline();
        let mySplitText = new SplitText( this.textContainer, {type:"words,chars"});
        let chars = mySplitText.chars;
        this.gsap.set( this.textContainer, {perspective: 400});
        this.tl.from(chars, {
            duration: 0.8,
            opacity: 0,
            scale: 0,
            y: 80,
            rotationX: 180,
            transformOrigin: "0% 50% -50",
            ease: "back",
            stagger: 0.01
        });
    }


    start = () => {
        this.tl.restart()
    }


    stop = () => {

    }

}
export default TextEffect;
