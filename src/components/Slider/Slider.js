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
}

window.customElements.define('card-slider', Slider); 