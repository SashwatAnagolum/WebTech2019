const templateNavBar = document.createElement('template');

templateNavBar.innerHTML = `
    <link rel="stylesheet" type="text/css" href="./components/NavBar/NavBar.css" />
	<div class="navBarTop" id="NavBarTop">
        <div class="navLogo" id="navLogo"></div>
        <div class="otherNav" id="otherNav">
            <div class="" id="circle1"></div>
            <div class="" id="circle2"></div>
            <div class="" id="circle3"></div>
            <div class="" id="circle4"></div>
        </div>
    </div>
`;

class NavBar extends HTMLElement {
	constructor() {
		super();

    	this.attachShadow({ mode: 'open' });
    	this.shadowRoot.appendChild(templateNavBar.content.cloneNode(true));	

        this.navLogo = this.shadowRoot.getElementById('navLogo');
        this.circle1 = this.shadowRoot.getElementById('circle1');
        this.circle2 = this.shadowRoot.getElementById('circle2');
        this.circle3 = this.shadowRoot.getElementById('circle3');
        this.circle4 = this.shadowRoot.getElementById('circle4');
	}

	connectedCallback() {
        this.navLogo.innerHTML = "Tw"; 
        this.circle1.setAttribute('class', this.getAttribute("type1"));
        this.circle2.setAttribute('class', this.getAttribute("type2"));
        this.circle3.setAttribute('class', this.getAttribute("type3"));
        this.circle4.setAttribute('class', this.getAttribute("type4"));                		
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

window.customElements.define('nav-bar', NavBar); 