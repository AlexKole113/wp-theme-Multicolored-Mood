class TextEffect {
    constructor( textContainer ) {
        this.textContainer = textContainer;
        this._textShowingUpdate()
    }

    _textHideEffect = (item) => {
        item.style.opacity = '0';
    }

    _textShowEffect = (item) => {
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
