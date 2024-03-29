const templateCardCarousel = document.createElement('template');

templateCardCarousel.innerHTML = `
    <link rel="stylesheet" type="text/css" href="./components/CardCarousel/CardCarousel.css" />
    <div class="carouselContainer" id="carouselContainer">
    	<a id="a1" href="">
            <travel-card href="" imgSrc="" heading="" subHeading="" id="card1"></travel-card>
        </a>
    	<a id="a2" href="">
            <travel-card href="" imgSrc="" heading="" subHeading="" id="card2"></travel-card>
        </a> 
    	<a id="a3" href="">
            <travel-card href="" imgSrc="" heading="" subHeading="" id="card3"></travel-card>
        </a>    		    	
    </div>
`;

class CardCarousel extends HTMLElement {
	constructor() {
		super();

        this.cardInfo = null;

    	this.attachShadow({ mode: 'open' });
    	this.shadowRoot.appendChild(templateCardCarousel.content.cloneNode(true));	
    	
        this.carouselContainer = this.shadowRoot.getElementById('carouselContainer');	
        this.card1 = this.shadowRoot.getElementById('card1');
        this.card2 = this.shadowRoot.getElementById('card2');
        this.card3 = this.shadowRoot.getElementById('card3');

        this.a1 = this.shadowRoot.getElementById('a1');
        this.a2 = this.shadowRoot.getElementById('a2');
        this.a3 = this.shadowRoot.getElementById('a3'); 

        this.links = [this.a1, this.a2, this.a3];
        this.cards = [this.card1, this.card2, this.card3];              
	}	

    static get observedAttributes() {
        return ['slide'];
    }    

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue != newValue && this.cardInfo) {
            this.changeSlides(newValue);
        }
    }

	connectedCallback() {
        for (var i = 0; i < 3; i ++) {
            this.cards[i].setAttribute('subHeading', 'Loading...');
        }

        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", () => {
            this.cardInfo = new Array();
            const data = JSON.parse(xhr.responseText);
            for (var i in data) {
                this.cardInfo.push(data[i]);
            }
            this.changeSlides(this.getAttribute('slide'));
        })
        xhr.open("GET", "https://wt2019-db.firebaseio.com/Places/curated.json");
        xhr.send()
	} 

    changeSlides(value) {
        // console.log('New value for slides = ', value)
        const slide = (+value - 1) * 3;
        for (var i = 0; i < 3; i ++) {
            this.links[i].setAttribute('href', '#details&country=' + this.cardInfo[slide + i].subHeading + '&place=' + this.cardInfo[slide + i].imgSrc.split('/')[3].split('.')[0]);
            this.cards[i].setAttribute('imgSrc', this.cardInfo[slide + i].imgSrc);
            this.cards[i].setAttribute('heading', this.cardInfo[slide + i].heading);
            this.cards[i].setAttribute('subHeading', this.cardInfo[slide + i].subHeading);           
        }
    }
}

window.customElements.define('card-carousel', CardCarousel); 