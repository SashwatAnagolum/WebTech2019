const templateCarouselContainer = document.createElement('template');

templateCarouselContainer.innerHtml = `
    <link rel="stylesheet" type="text/css" href="./components/CarouselContainer/CarouselContainer.css" />
		<card-carousel slide="2" id="carousel"></card-carousel>									
		<card-slider numSlides="2" slideNum="1" id="slider></card-slider>	
`

class CarouselContainer extends HTMLElement {
	constructor() {
		super();

    	this.attachShadow({ mode: 'open' });
    	this.shadowRoot.appendChild(templateCarouselContainer.content.cloneNode(true));	

    	this.slider = shadowRoot.getElementById("slider");
    	this.carousel = shadowRoot.getElementById("slider");
	}

	// connectedCallback() {

	// }
}

window.customElements.define('carousel-container', CarouselContainer); 