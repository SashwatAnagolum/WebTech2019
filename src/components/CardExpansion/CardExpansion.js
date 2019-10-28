const templateCardExpansion = document.createElement('template');

templateCardExpansion.innerHTML = `
    <link rel="stylesheet" type="text/css" href="./components/CardExpansion/CardExpansion.css" />
	<div class="cardContainer" id="cardContainer">
        <img draggable="false" class="cardImage" id="cardImage" src=""></img>
        <div class="filter"></div>        
        <div class="callAction" id="callAction">
            <div class="cardHeading" id="cardHeading"></div>
            <div class="cardSubHeading" id="cardSubHeading"></div>
            <new-button type="cardSlide" text="Add trip" class=newButton""></new-button>
        </div>
        <div class="cardText"><p id="cardText"></p></div>
	</div>
`;

class CardExpansion extends HTMLElement {
	constructor() {
		super();

    	this.attachShadow({ mode: 'open' });
    	this.shadowRoot.appendChild(templateCardExpansion.content.cloneNode(true));	

    	this.cardImage = this.shadowRoot.getElementById('cardImage');
        this.cardHeading = this.shadowRoot.getElementById('cardHeading');
        this.cardSubHeading = this.shadowRoot.getElementById('cardSubHeading');   
	    this.cardText = this.shadowRoot.getElementById('cardText');
    }

	connectedCallback() {  
        const card =  {
            place: 'Bora Bora',
            country: 'French Polynesia',
            info: {
                slide1: {
                   image: '../assets/CardExpansions/BoraBora/1.jpg',
                   description: 'Stay at some of the most scenic resorts in the world'   
                }, 
                slide2: {
                   image: '../assets/CardExpansions/BoraBora/2.jpg',
                   description: 'Stay at some of the most scenic resorts in the world'   
                }, 
                slide3: {
                   image: '../assets/CardExpansions/BoraBora/3.jpg',
                   description: 'Stay at some of the most scenic resorts in the world'   
                }, 
                slide4: {
                   image: '../assets/CardExpansions/BoraBora/4.jpg',
                   description: 'Stay at some of the most scenic resorts in the world'   
                }
            }
        }
        this.cardImage.setAttribute('src', card.info[this.getAttribute('slide')].image)
        const text = card.info[this.getAttribute('slide')].description.split(' ');
        this.cardText.innerHTML = '<span>' + text[0] + '</span>' + text.slice(1, ).join(' ');
        this.cardHeading.innerHTML = card.place;
        this.cardSubHeading.innerHTML = card.country;
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

window.customElements.define('card-expansion', CardExpansion); 