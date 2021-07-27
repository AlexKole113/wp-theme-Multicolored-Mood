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




    next = (next) => {
        return new Promise((res)=>{
            this._textShowingUpdate(next)
            setTimeout(()=>{
                res(true)
            },1000);
        })
    }

}

export default TextEffect;
