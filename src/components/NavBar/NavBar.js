const templateNavBar = document.createElement('template');

templateNavBar.innerHTML = `
    <link rel="stylesheet" type="text/css" href="./components/NavBar/NavBar.css" />
	<div class="navBarTop" id="NavBarTop">
        <div class="navLogo" id="navLogo">Tw</div>
    </div> 
    <div class="otherNav" id="otherNav">
        <a href="#" style="cursor:none"><div class="" id="1"></div></a>
        <a href="#curated" style="cursor:none"><div class="" id="2"></div></a>
        <a href="#details&country=China&place=Xian" style="cursor:none"><div class="" id="3"></div></a>
        <a href="#design" style="cursor:none"><div class="" id="4"></div></a>
        <a href="#relive" style="cursor:none"><div class="hidden" id="5"></div></a>
    </div>
    <div class="button">
            <new-button id="buttonNav" type="navBar" text="" outlink=""><new-button>
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
        this.button = this.shadowRoot.getElementById('buttonNav');
	}

	connectedCallback() {
        let className = null;
        for (var i in this.circles) {
            if (+i + 1 == +this.getAttribute('selected')) {
                this.circles[i].setAttribute('class', this.getAttribute('theme') + ' ' + this.getAttribute('theme') + 'Selected' + ' navItem');
            } else {
                this.circles[i].setAttribute('class', this.getAttribute('theme') + ' navItem');               
            }
        } 

        if (this.getAttribute('loggedIn') == 'true') {
            this.circle5.setAttribute('class', 'navItem ' + this.getAttribute('theme'));
        }

        if (this.getAttribute('theme') == 'white') {
            this.button.setAttribute('type', 'navBarWhite');
        } else {
            this.button.setAttribute('type', 'navBar');            
        }

        if (+this.getAttribute('selected') == 5) {
            this.circle5.setAttribute('class', this.circle5.getAttribute('class') + ' ' + this.getAttribute('theme') + 'Selected')
        }        

        this.button.setAttribute("text",this.getAttribute("text"));
        this.button.setAttribute("outlink",this.getAttribute('outlink')); 
    }

    // changeUrl(e) {
    // }

  	static get observedAttributes() {
    	return ['text', 'type', 'outlink'];
    }

}

window.customElements.define('nav-bar', NavBar); 