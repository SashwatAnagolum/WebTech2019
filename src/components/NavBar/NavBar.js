const templateNavBar = document.createElement('template');

templateNavBar.innerHTML = `
    <link rel="stylesheet" type="text/css" href="./components/NavBar/NavBar.css" />
	<div class="navBarTop" id="NavBarTop">
        <div class="navLogo" id="navLogo">Tw</div>
    </div> 
    <div class="otherNav" id="otherNav">
        <div class="" id="1"></div>
        <div class="" id="2"></div>
        <div class="" id="3"></div>
        <div class="" id="4"></div>
        <div class="hidden" id="5"></div>
    </div>
    <div class="button">
            <new-button type="navBar" text="Sign In"><new-button>
    </div>      
`;

class NavBar extends HTMLElement {
	constructor() {
		super();

    	this.attachShadow({ mode: 'open' });
    	this.shadowRoot.appendChild(templateNavBar.content.cloneNode(true));	

        this.circle1 = this.shadowRoot.getElementById('1');
        this.circle2 = this.shadowRoot.getElementById('2');
        this.circle3 = this.shadowRoot.getElementById('3');
        this.circle4 = this.shadowRoot.getElementById('4');
        this.circle5 = this.shadowRoot.getElementById('5');
        this.circles = [this.circle1, this.circle2, this.circle3, this.circle4];
	}

	connectedCallback() {
        let className = null;
        for (var i in this.circles) {
            console.log(i);
            if (i + 1 == +this.getAttribute('selected')) {
                console.log(this.circles[i]);
                this.circles[i].setAttribute('class', this.getAttribute('theme') + ' ' + this.getAttribute('theme') + 'Selected' + ' navItem');
            } else {
                this.circles[i].setAttribute('class', this.getAttribute('theme') + ' navItem');               
            }  
        } 

        if (this.getAttribute('loggedIn') == 'true') {
            this.circle5.setAttribute('class', this.getAttribute('theme') + ' navItem');
        }
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