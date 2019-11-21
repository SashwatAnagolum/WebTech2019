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

        this.card =  null;       
    }

	connectedCallback() {  
        this.cardSubHeading.innerHTML = 'Loading...'

        var req = new XMLHttpRequest();

        if (window.location.hash.split('&')[0] == '#details') {
            var country = window.location.hash.split('=')[1].split('&')[0];
            var place = window.location.hash.split('=')[2];
            req.addEventListener("load", () => { 
                this.card = new Object();
                this.card = JSON.parse(req.responseText);
                console.log(this.card)
                this.updateSlide(this.getAttribute('slide'));
            });
            req.open("GET", "https://wt2019-db.firebaseio.com/Places/countries/" + country + '/' + place + ".json");
        } else if (window.location.hash.split('&')[0] == '#customtrip') {
            const params = this.extractParams(window.location.hash);
            req.addEventListener("load", () => {
                this.processData(req);
                this.updateSlide(this.getAttribute('slide'));
            })

        }   
        req.send();
    }

  	static get observedAttributes() {
    	return ['slide'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(oldValue!=newValue && this.cardInfo)
            this.updateSlide(newValue);
    }

    extractParams(string) {
        let params = string.split('&');
        var queryParams = new Object();
        for (var i = 1; i < params.length; i ++) {
            let pair = params[i].split('=');
            queryParams[pair[0]] = decodeURIComponent(pair[1]);
        }
        return queryParams;
    }      
    
    updateSlide(value) {
        this.cardImage.setAttribute('src', this.card.info['slide' + value].imgSrc);
        const text = this.card.info['slide' + value].description.split(' ');
        this.cardText.innerHTML = '<span>' + text[0] + '</span>' + text.slice(1, ).join(' ');
        this.cardHeading.innerHTML = this.card.place;
        this.cardSubHeading.innerHTML = this.card.country;
    }

}

window.customElements.define('card-expansion', CardExpansion); 