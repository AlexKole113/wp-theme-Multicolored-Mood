import anime from 'animejs/lib/anime.es.js';

class TextEffect {
    constructor({parent, classNameTextContainer}) {
        this.plugin = anime;
        this.textContainer = parent.querySelector(classNameTextContainer);
    }

    init = () => {
        this.stop();
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
                        duration: 600,
                        elasticity: 400,
                        delay: (el, i) => 25 * (i+1)
                    })
            }
        },600)

    }


    stop = () => {
        setTimeout(()=>{
            const containers = this.textContainer.querySelectorAll('.widget-content__text');
            for(let i = 0; i <= containers.length - 1; i += 1){
                containers[i].innerHTML = containers[i].textContent.replace(/\S/g, "<span class='letter'>$&</span>");
                const targets = containers[i].querySelectorAll('.letter');
                setTimeout(()=>{

                    this.plugin.timeline({loop: false})
                        .add({
                            targets,
                            opacity: 0,
                            duration: 300,
                            easing: "easeOutExpo",
                            delay: 0
                        })

                }, 800)

            }
        },600)
    }

}
export default TextEffect;
