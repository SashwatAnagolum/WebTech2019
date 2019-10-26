const templateDropDownField = document.createElement('template');

templateDropDownField.innerHTML = `
    <link rel="stylesheet" type="text/css" href="./components/DropDownField/DropDownField.css" />
	<div class="dropDown" id="dropDown">
        <div class="field" id="field"></div>
        <div class="dropDiv" id="dropDiv">
            <select class="drop" id="drop"></select>
        </div>
        <div class="scroll" id="scroll"></div>
	</div>
`;

class DropDownField extends HTMLElement {
	constructor() {
		super();

    	this.attachShadow({ mode: 'open' });
    	this.shadowRoot.appendChild(templateDropDownField.content.cloneNode(true));	

    	this.field = this.shadowRoot.getElementById('field');
        this.drop = this.shadowRoot.getElementById('drop');
        this.scroll = this.shadowRoot.getElementById('scroll');
	}

	connectedCallback() {
        this.field.innerHTML = this.getAttribute("fieldText"); 
        //get country list
        const places = ['French Polynesia','Fiji','Greece','USA','Peru','Bangalore'];
        for(var i in places) {
            var place = document.createElement('option');
            place.value = places[i];
            place.appendChild(document.createTextNode(places[i]));
            this.drop.appendChild(place);
        }
    }

}

window.customElements.define('drop-down', DropDownField); 