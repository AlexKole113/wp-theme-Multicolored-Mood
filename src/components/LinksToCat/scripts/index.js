import anime from "animejs/lib/anime.es.js";
const animateLinkToCat = () => {
    const targets = '.show-effect';

    anime.timeline({loop: false})
        .add({
            targets,
            translateY: [90,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutSine",
            duration: 900,
            delay: (el, i) => 200 + 100 * i
        })
}
export default animateLinkToCat;
