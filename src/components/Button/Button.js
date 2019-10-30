const templateButton = document.createElement('template');

templateButton.innerHTML = `
    <link rel="stylesheet" type="text/css" href="./components/Button/Button.css" />
	<a href="" id="link" style="cursor:none; text-decoration: none">
    <div class="" id="outer">
		<div class="" id="inner"></div>
	</div>
    </a>
`;

class Button extends HTMLElement {
	constructor() {
		super();

    	this.attachShadow({ mode: 'open' });
    	this.shadowRoot.appendChild(templateButton.content.cloneNode(true));	

        this.link = this.shadowRoot.getElementById('link');
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
        this.link.setAttribute('href', this.getAttribute("outlink"));                   		
    }

  	static get observedAttributes() {
    	return ['text', 'type'];
    }

    get text() {
        return this.getAttribute('text');
    }    

    get type() {
        return this.getAttribute('type');
    }  

  	set text(newValue) {
    	this.setAttribute('text', newValue);
 	}

    set className(newValue) {
    	this.setAttribute('type', newValue);
    }

}

window.customElements.define('new-button', Button); 