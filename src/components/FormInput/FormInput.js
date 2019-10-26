const templateFormInput = document.createElement('template');

templateFormInput.innerHTML = `
    <link rel="stylesheet" type="text/css" href="./components/FormInput/FormInput.css" />
	<div class="formInputContainer" id="formInputContainer">
        <div class="field" id="field"></div>
        <div class="inputDiv" id="inputDiv">
            <input class="inputField" id="inputField"></input>
        </div>
	</div>
`;

class FormInput extends HTMLElement {
	constructor() {
		super();

    	this.attachShadow({ mode: 'open' });
    	this.shadowRoot.appendChild(templateFormInput.content.cloneNode(true));	

    	this.field = this.shadowRoot.getElementById('field');
    	this.inputField = this.shadowRoot.getElementById('inputField');
	}

	connectedCallback() {
    	this.field.innerHTML = this.getAttribute("fieldText"); 
        this.inputField.setAttribute('type', this.getAttribute("fieldType"));
        this.inputField.setAttribute('name', this.getAttribute("fieldText"));
        this.inputField.setAttribute('placeholder', this.getAttribute("fieldText"));
    }

  	static get observedAttributes() {
    	return ['text', 'type'];
    }

    get text() {
        return this.getAttribute('text');
    }    

    get className() {
        return this.getAttribute('type');
    }  

  	set innerText(newValue) {
    	this.setAttribute('text', newValue);
 	}

    set className(newValue) {
    	this.setAttribute('type', newValue);
    }

}

window.customElements.define('form-input', FormInput); 