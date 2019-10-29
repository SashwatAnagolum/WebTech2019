const templateLayout = document.createElement('template');

templateLayout.innerHTML = `
    <link rel="stylesheet" type="text/css" href="./components/Layout/Layout.css" />
    <div class="layoutContainer" id="layoutContainer">
        <nav-bar type1="" type2="" type3="" type4="" id="layoutNavBar"></nav-bar>
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
        this.layoutNavBar.setAttribute('type1', this.getAttribute("type1"));
        this.layoutNavBar.setAttribute('type2', this.getAttribute("type2"));
        this.layoutNavBar.setAttribute('type3', this.getAttribute("type3"));
        this.layoutNavBar.setAttribute('type4', this.getAttribute("type4")); 
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