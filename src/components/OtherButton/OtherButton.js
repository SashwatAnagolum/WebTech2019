const templateOtherButton = document.createElement('template');

templateOtherButton.innerHTML = `
    <link rel="stylesheet" type="text/css" href="./components/OtherButton/OtherButton.css" />
    <div class="" id="outer">
		<div class="" id="inner"></div>
	</div>
    </a>
`;

class OtherButton extends HTMLElement {
	constructor() {
		super();

    	this.attachShadow({ mode: 'open' });
    	this.shadowRoot.appendChild(templateOtherButton.content.cloneNode(true));	

    	this.outerDiv = this.shadowRoot.getElementById('outer');
    	this.innerDiv = this.shadowRoot.getElementById('inner');
	}

	connectedCallback() {
    	this.innerDiv.innerHTML = this.getAttribute("text"); 

        if ((this.getAttribute('type') != 'navBar') && (this.getAttribute('type') != 'navBarWhite')) {
            this.outerDiv.setAttribute('class', this.getAttribute("type") + ' regular');             
        } else {
            this.outerDiv.setAttribute('class', this.getAttribute('type')); 
        }
        this.innerDiv.setAttribute('class', this.getAttribute("type") + 'Inner');                 		
    }

  	static get observedAttributes() {
    	return ['text', 'type'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue != newValue) {
            this.change(name, newValue);
        }
    }

    change(name, value) {
        this.setAttribute(name, value);
        if (name == 'text') {
            this.innerDiv.innerHTML = value;
        }
    }

}

window.customElements.define('other-button', OtherButton); 