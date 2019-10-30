    const templateCardCarousel = document.createElement('template');

templateCardCarousel.innerHTML = `
    <link rel="stylesheet" type="text/css" href="./components/CardCarousel/CardCarousel.css" />
    <div class="carouselContainer">
    	<travel-card imgSrc="" heading="" subHeading="" id="card1"></travel-card>
    	<travel-card imgSrc="" heading="" subHeading="" id="card2"></travel-card> 
    	<travel-card imgSrc="" heading="" subHeading="" id="card3"></travel-card>    		    	
    </div>
`;

class CardCarousel extends HTMLElement {
	constructor() {
		super();

        this.cardInfo = [
            {
                imgSrc: './assets/BoraBora.jpg',
                heading: 'Bora Bora',
                subHeading: 'French Polynesia'
            },
            {
                imgSrc: './assets/SanFrancisco.jpg',
                heading: 'San Francisco',
                subHeading: 'CA, USA'
            },             
            {
                imgSrc: './assets/CancunMexico.jpeg',
                heading: 'Cancun',
                subHeading: 'Mexico'
            },           
            {
                imgSrc: '../assets/LaucalaFiji.jpg',
                heading: 'Laucala',
                subHeading: 'Fiji'
            },
            {
                imgSrc: './assets/CreteGreece.jpg',
                heading: 'Crete',
                subHeading: 'Greece'
            },
            {
                imgSrc: './assets/MachuPicchu.jpg',
                heading: 'Machu Picchu',
                subHeading: 'Peru'                
            }
        ]

    	this.attachShadow({ mode: 'open' });
    	this.shadowRoot.appendChild(templateCardCarousel.content.cloneNode(true));	
    	
        this.carouselContainer = this.shadowRoot.getElementById('carouselContainer');	
        this.card1 = this.shadowRoot.getElementById('card1');
        this.card2 = this.shadowRoot.getElementById('card2');
        this.card3 = this.shadowRoot.getElementById('card3');

        this.cards = [this.card1, this.card2, this.card3];              
	}	

    static get observedAttributes() {
        return ['slide'];
    }    

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue != newValue) {
            this.changeSlides(newValue);
        }
    }

	connectedCallback() {
		this.changeSlides(this.getAttribute('slide'));
	}

    changeSlides(value) {
        const slide = (+value - 1) * 3;
        for (var i = 0; i < 3; i ++) {
            this.cards[i].setAttribute('imgSrc', this.cardInfo[slide + i].imgSrc);
            this.cards[i].setAttribute('heading', this.cardInfo[slide + i].heading);
            this.cards[i].setAttribute('subHeading', this.cardInfo[slide + i].subHeading);            
        }
    }
}

window.customElements.define('card-carousel', CardCarousel); 