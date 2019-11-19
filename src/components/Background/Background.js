const templateBackground = document.createElement('template');

templateBackground.innerHTML = `
    <link rel="stylesheet" type="text/css" href="./components/Background/Background.css" />
	<div class="white"></div>
	<div class="grey"></div>	
	<img src="./assets/Background/beach.jpg" class="hidden" id="image"></img>
	<div class="" id="blue"></div>
`;

class Background extends HTMLElement {
	constructor() {
		super();

		this.updateStyling = this.updateStyling.bind(this);

    	this.attachShadow({ mode: 'open' });
    	this.shadowRoot.appendChild(templateBackground.content.cloneNode(true));	
    	this.image = this.shadowRoot.getElementById('image');
    	this.blueDiv = this.shadowRoot.getElementById('blue');
	}

  static get observedAttributes() {
    return ['islanding'];
  }

  connectedCallback() {
   	this.updateStyling(this.getAttribute('islanding'));
  }

	attributeChangedCallback(name, oldValue, newValue) {
		this.updateStyling(newValue);
	}

	updateStyling(value) {
		if (value == 'false') {
			this.image.setAttribute('src', '');
			this.image.setAttribute('class', 'hidden')
			this.blueDiv.setAttribute('class', 'hiddenBlue');			
		} else if (value == 'true') {
			this.image.setAttribute('src', './assets/Background/beach.jpg');
			this.image.setAttribute('class', 'visible');
			this.blueDiv.setAttribute('class', 'visibleBlue');			
		}
	}

}

window.customElements.define('back-ground', Background); 