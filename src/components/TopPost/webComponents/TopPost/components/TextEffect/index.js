class TextEffect {
    constructor({parent, classNameTextContainer}) {
        this.plugin = anime;
        this.textContainer = parent.querySelector(classNameTextContainer);
    }

    init = () => {

    }


    start = () => {
        setTimeout(()=>{
            const containers = this.textContainer.querySelectorAll('.widget-content__text');
            for(let i = 0; i <= containers.length - 1; i += 1){
                containers[i].innerHTML = containers[i].textContent.replace(/\S/g, "<span class='letter'>$&</span>");
                const targets = containers[i].querySelectorAll('.letter');
                this.plugin.timeline({loop: false})
                    .add({
                        targets,
                        scale: [0, 1],
                        duration: 1500,
                        elasticity: 600,
                        delay: (el, i) => 45 * (i+1)
                    }).add({
                    targets: '.ml9',
                    opacity: 0,
                    duration: 1000,
                    easing: "easeOutExpo",
                    delay: 1000
                })
            }
        },800)

    }


    stop = () => {

    }

}
export default TextEffect;
