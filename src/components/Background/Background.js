const templateBackground = document.createElement('template');

templateBackground.innerHTML = `
    <link rel="stylesheet" type="text/css" href="./components/Background/Background.css" />
	<div class="grey"></div>	
`;

class Background extends HTMLElement {
	constructor() {
		super();

    	this.attachShadow({ mode: 'open' });
    	this.shadowRoot.appendChild(templateBackground.content.cloneNode(true));	
	}
}

window.customElements.define('back-ground', Background); 