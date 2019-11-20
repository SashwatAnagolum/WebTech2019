const templateSliderWrapper = document.createElement('template')

templateSliderWrapper.innerHtml = `
	<link rel="stylesheet" type="text/css" href="./HOC/SliderWrapper/SliderWrapper.css" />	
	<div id="sliderWrapperDiv">
		<slot name="carousel"></slot>
		<slot name="slider"></slot>
	</div>
`

class SliderWrapper extends HTMLElement {
	constructor() {
		super();

    	this.attachShadow({ mode: 'open' });
    	this.shadowRoot.appendChild(templateSliderWrapper.content.cloneNode(true));

    	this.left = this.shadowRoot.getElementById('sliderWrapperDiv');		
	}

	// connectedCallback() {

	// }
}

window.customElements.define('slider-wrapper', SliderWrapper); 