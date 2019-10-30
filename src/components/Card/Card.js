const templateCard = document.createElement('template');

templateCard.innerHTML = `
    <link rel="stylesheet" type="text/css" href="./components/Card/Card.css" />
	<div class="cardContainer" id="cardContainer">
        <div class="imageDiv" id="imageDiv">
            <img class="image" id="image"></img>
        </div>
        <div class="line" id="line"></div>
        <div class="text" id="text">
            <div class="cardHeading" id="cardHeading"></div>
            <div class="cardSubHeading" id="cardSubHeading"></div>
        </div>
	</div>
`;

class Card extends HTMLElement {
	constructor() {
		super();

        this.onClick = this.onClick.bind(this);

    	this.attachShadow({ mode: 'open' });
    	this.shadowRoot.appendChild(templateCard.content.cloneNode(true));	

        this.cardContainerDiv = this.shadowRoot.getElementById('cardContainer');
        this.image = this.shadowRoot.getElementById('image');
        this.cardHeading = this.shadowRoot.getElementById('cardHeading');
        this.cardSubHeading = this.shadowRoot.getElementById('cardSubHeading');
	}

	connectedCallback() {
        this.updateContent();   
        this.cardContainerDiv.addEventListener('click', this.onClick);                 		
    }

    disconnectedCallBack() {
        this.cardContainerDiv.removeEventListener(this.onClick);
    }

    static get observedAttributes() {
        return ['imgSrc', 'heading', 'subheading'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue != newValue) {
            this.updateContent(name, newValue)
        }
    }

    onClick() {
            //route to /{this.heading} => w no spaces between words
    }

    updateContent(name, value) {
        this.image.setAttribute("src", this.getAttribute("imgSrc")); 
        this.cardHeading.innerHTML = this.getAttribute("heading");
        this.cardSubHeading.innerHTML = this.getAttribute("subHeading");                            
    }
}

window.customElements.define('travel-card', Card); 