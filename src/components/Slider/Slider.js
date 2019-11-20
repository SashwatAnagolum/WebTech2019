const templateSlider = document.createElement('template');

templateSlider.innerHTML = `
    <link rel="stylesheet" type="text/css" href="./components/Slider/Slider.css" />
	<div class="left" id="left">
		<div class="leftArrow">
			<div class="upperLeft"></div>
			<div class="lowerLeft"></div>
			<div class="straightLeft"></div>
		</div>				
	</div>
	<div class="right" id="right">
		<div class="rightArrow">	
			<div class="upperRight"></div>
			<div class="lowerRight"></div>
			<div class="straightRight"></div>
		</div>					
	</div>	
`;

class Slider extends HTMLElement {
	constructor() {
		super();

    	this.attachShadow({ mode: 'open' });
    	this.shadowRoot.appendChild(templateSlider.content.cloneNode(true));

    	this.left = this.shadowRoot.getElementById('left');
    	this.right = this.shadowRoot.getElementById('right');    			
	}

	connectedCallback() {
		this.left.addEventListener("click", this.changeSlide);
		this.right.addEventListener("click", this.changeSlide);
		this.numSlides = this.getAttribute('numslides');
	}

	changeSlide = (e) => {
		if (e.target.getAttribute('id') == 'left') {
			this.setAttribute('slidenum', Math.abs(+this.getAttribute('slidenum') - 1) % this.numSlides)		
		} else {
			this.setAttribute('slidenum', (+this.getAttribute('slidenum') + 1) % this.numSlides)		
		}
	} 

	static get observedAttributes() {
		return ['slidenum']
	}
}

window.customElements.define('card-slider', Slider); 