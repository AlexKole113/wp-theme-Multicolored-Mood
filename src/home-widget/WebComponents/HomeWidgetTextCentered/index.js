import componentCSS from "./CSS/componentCSS.js";
import componentHTML from "./HTML/componentHTML.js";
import Slider from "../../scripts/Slider.js";
export default class HomeWidgetTextCentered extends HTMLElement {

    static isNewValChanged = ( newVal, oldVal ) => newVal !== oldVal
    static observedAttributes = [ 'data' ];
    static template = document.createElement('template');
    static getHTML = ({ items, socialLinks }) => (`
        ${ componentCSS }
        ${ componentHTML( items , socialLinks ) }
    `);

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.props = {
            data: JSON.parse( this.getAttribute('data' ) ),
        }
        HomeWidgetTextCentered.template.innerHTML = HomeWidgetTextCentered.getHTML( this.props.data );
        this?.shadowRoot?.append( HomeWidgetTextCentered.template.content.cloneNode(true) );

        this.onmousedown = (event) => {
            event.preventDefault();
            const e = new CustomEvent( 'activate',{ cancelable:true } );
            this.dispatchEvent(e)
            this.setAttribute('activate', true)
        }

        this.onmouseup = () => {
            this.removeAttribute('activate')
        }

    }

    connectedCallback() {

        this.sliderEffect = new Slider({
            uniforms: {
                intensity: {value: 1, type:'f', min:0., max:3}
            },
            images: this.props.data.items.map(({imageUrl}) => imageUrl),
            container: this?.shadowRoot.querySelector('.home-widget-collection'),
            fragment: `
		uniform float time;
		uniform float progress;
		uniform float intensity;
		uniform float width;
		uniform float scaleX;
		uniform float scaleY;
		uniform float transition;
		uniform float radius;
		uniform float swipe;
		uniform sampler2D texture1;
		uniform sampler2D texture2;
		uniform sampler2D displacement;
		uniform vec4 resolution;
		varying vec2 vUv;
		mat2 getRotM(float angle) {
		    float s = sin(angle);
		    float c = cos(angle);
		    return mat2(c, -s, s, c);
		}
		const float PI = 3.1415;
		const float angle1 = PI *0.25;
		const float angle2 = -PI *0.75;


		void main()	{
			vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

			vec4 disp = texture2D(displacement, newUV);
			vec2 dispVec = vec2(disp.r, disp.g);

			vec2 distortedPosition1 = newUV + getRotM(angle1) * dispVec * intensity * progress;
			vec4 t1 = texture2D(texture1, distortedPosition1);

			vec2 distortedPosition2 = newUV + getRotM(angle2) * dispVec * intensity * (1.0 - progress);
			vec4 t2 = texture2D(texture2, distortedPosition2);

			gl_FragColor = mix(t1, t2, progress);

		}

	`
        });
    }

    attributeChangedCallback( name, oldVal, newVal ) {
        switch ( name ) {
            case 'data':
                if( HomeWidgetTextCentered.isNewValChanged( newVal, oldVal ) ) {
                    console.log( 'data changed' );
                }
                break;
        }
    }


}



