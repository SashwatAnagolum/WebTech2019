const templateCardExpansion = document.createElement('template');

templateCardExpansion.innerHTML = `
    <link rel="stylesheet" type="text/css" href="./components/CardExpansion/CardExpansion.css" />
	<div class="cardContainer" id="cardContainer">
        <img draggable="false" class="cardImage" id="cardImage" src=""></img>
        <div class="filter"></div>        
        <div class="callAction" id="callAction">
            <div class="cardHeading" id="cardHeading"></div>
            <div class="cardSubHeading" id="cardSubHeading"></div>
            <new-button type="cardSlide" text="Add trip" class="button"></new-button>
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

        this.card =  {
            place: 'Bora Bora',
            country: 'French Polynesia',
            info: {
                slide1: {
                   image: './assets/CardExpansions/BoraBora/1.jpg',
                   description: 'Stay at some of the most scenic resorts in the world'   
                }, 
                slide2: {
                   image: './assets/CardExpansions/BoraBora/2.png',
                   description: 'Snorkel amongst the fish in sand bottomed lagoons'   
                }, 
                slide3: {
                   image: './assets/CardExpansions/BoraBora/3.png',
                   description: 'Watch Polynesian dancers perform the traditional Tahitian fire dance'   
                }, 
                slide4: {
                   image: './assets/CardExpansions/BoraBora/4.png',
                   description: 'Sail at sunset as the lagoon turns magenta and the sky fades into a magical dusk'   
                }
            }
        }        
    }

	connectedCallback() {  
        this.updateSlide(this.getAttribute('slide'))
    }

  	static get observedAttributes() {
    	return ['slide'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(oldValue!=newValue)
            this.updateSlide(newValue);
    }
    
    updateSlide(value) {
        this.cardImage.setAttribute('src', this.card.info['slide' + value].image);
        const text = this.card.info['slide' + value].description.split(' ');
        this.cardText.innerHTML = '<span>' + text[0] + '</span>' + text.slice(1, ).join(' ');
        this.cardHeading.innerHTML = this.card.place;
        this.cardSubHeading.innerHTML = this.card.country;
    }

}

window.customElements.define('card-expansion', CardExpansion); 