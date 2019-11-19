const templateWarning = document.createElement('template');

templateWarning.innerHTML = `
    <link rel="stylesheet" type="text/css" href="./components/Warning/Warning.css" />
    <div class="outer" id="outer">
        <div class="line" id="line1"></div>
        <div class="line" id="line2"></div>
	</div>
    </a>
`;

class Warning extends HTMLElement {
	constructor() {
		super();

    	this.attachShadow({ mode: 'open' });
    	this.shadowRoot.appendChild(templateWarning.content.cloneNode(true));	

    	this.outerDiv = this.shadowRoot.getElementById('outer');
        this.line1 = this.shadowRoot.getElementById('line1');
        this.line2 = this.shadowRoot.getElementById('line2');
	}

	connectedCallback() {
        this.line1.innerHTML = this.getAttribute("text1");    
        this.line2.innerHTML = this.getAttribute("text2");            		
    }

  	static get observedAttributes() {
    	return ['text1', 'text2'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue != newValue) {
            this.change(name, newValue);
        }
    }

    change(name, value) {
        this.setAttribute(name, value);
        if (name == 'text1') {
            this.line1.innerHTML = value;
        }
        if (name == 'text2') {
            this.line2.innerHTML = value;
        }
    }

}

window.customElements.define('warning-box', Warning); 