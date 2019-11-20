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
        if(this.getAttribute("fieldText") == "Location"){
            const places = ['French Polynesia','Franch','Germany','China','Mexico'];
            for(var i in places) {
                var place = document.createElement('option');
                place.value = places[i];
                place.appendChild(document.createTextNode(places[i]));
                this.drop.appendChild(place);
            }
        }

        if(this.getAttribute("fieldText") == "Duration"){
            const duration = ['2 days', '3 days', '4 days', '5 days', '6 days', '1 week'];
            for(var i in duration) {
                var duration1 = document.createElement('option');
                duration1.value = duration[i];
                duration1.appendChild(document.createTextNode(duration[i]));
                this.drop.appendChild(duration1);
            }
        }

        if(this.getAttribute("fieldText") == "Theme"){
            const theme = ['Sightseeing','Backpacking','Leisure'];
            for(var i in theme) {
                var theme1 = document.createElement('option');
                theme1.value = theme[i];
                theme1.appendChild(document.createTextNode(theme[i]));
                this.drop.appendChild(theme1);
            }
        }

        if(this.getAttribute("fieldText") == "Biome"){
            const biome = ['Beach','City','Desert'];
            for(var i in biome) {
                var biome1 = document.createElement('option');
                biome1.value = biome[i];
                biome1.appendChild(document.createTextNode(biome[i]));
                this.drop.appendChild(biome1);
            }
        }
    }

}

window.customElements.define('drop-down', DropDownField); 