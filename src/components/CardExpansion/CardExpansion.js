const templateCardExpansion = document.createElement('template');

templateCardExpansion.innerHTML = `
    <link rel="stylesheet" type="text/css" href="./components/CardExpansion/CardExpansion.css" />
	<div class="cardContainer" id="cardContainer">
        <img class="cardImage" id="cardImage" src=""></img>
        <div class="callAction" id="callAction">
            <div class="cardHeading" id="cardHeading"></div>
            <div class="cardSubHeading" id="cardSubHeading"></div>
        </div>
        <div class="cardText" id="cardText"></div>
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
        var card =  new Object();
        card.place = 'Bora Bora';
        card.country = 'French Polynesia';
        var slide1 = new Object();
        slide1.image = './components/CardExpansion/BOR_429_aspect16x9.jpg';
        slide1.description = 'Stay at some of the most scenic resorts in the world';
        var slide2 = new Object();
        slide2.image = '';
        slide2.description = 'Sail at sunset as the lagoon turns magenta and the sky fades into a magical dusk';
        var slide3 = new Object();
        slide3.image = '';
        slide3.description = 'Watch Polynesian dancers perform the traditional Tahitian fire dance';
        var slide4 = new Object();
        slide4.image = '';
        slide4.description = 'Snorkel amongst the fish in sand bottomed lagoons';
        card.info = [slide1, slide2, slide3, slide4];
        if (this.getAttribute('slide') == 'slide1') {
            this.cardImage.setAttribute('src', card.info[0].image);
            this.cardText.innerHTML = card.info[0].description;
        }
        else if (this.getAttribute('slide') == 'slide2') {
            this.cardImage.setAttribute('src', card.info[1].image);
            this.cardText.innerHTML = card.info[1].description;
        }
        if (this.getAttribute('slide') == 'slide3') {
            this.cardImage.setAttribute('src', card.info[2].image);
            this.cardText.innerHTML = card.info[2].description;
        }
        if (this.getAttribute('slide') == 'slide4') {
            this.cardImage.setAttribute('src', card.info[3].image);
            this.cardText.innerHTML = card.info[3].description;
        }
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