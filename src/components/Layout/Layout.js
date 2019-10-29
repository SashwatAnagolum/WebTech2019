const templateLayout = document.createElement('template');

templateLayout.innerHTML = `
    <link rel="stylesheet" type="text/css" href="./components/Layout/Layout.css" />
    <div class="layoutContainer" id="layoutContainer">
        <div>
            <slot name="innerLayout"></slot>
        </div>
	</div>
`;

class Layout extends HTMLElement {
	constructor() {
		super();

    	this.attachShadow({ mode: 'open' });
    	this.shadowRoot.appendChild(templateLayout.content.cloneNode(true));	
    	this.layoutNavBar = this.shadowRoot.getElementById('layoutNavBar');
    }

	connectedCallback() { 
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

  	set text(newValue) {
    	this.setAttribute('text', newValue);
 	}

    set className(newValue) {
    	this.setAttribute('type', newValue);
    }

}

window.customElements.define('layout-render', Layout); 