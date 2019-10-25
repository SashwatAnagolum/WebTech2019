const templateMouse = document.createElement('template');

templateMouse.innerHTML = `
	<style>
		@import "./HOC/Mouse/Mouse.css";
	</style>
	<div 
		class="" 
		id="cursorSmall"
		style="left: -3px; top: -3px"></div>
	<div class="" id="cursorBig"></div>		
`;

class Mouse extends HTMLElement {
	constructor() {
		super();	

		this.initCursorSmall = this.initCursorSmall.bind(this);

		this.x = 0;
		this.y = 0;

    	this.attachShadow({ mode: 'open' });
    	this.shadowRoot.appendChild(templateMouse.content.cloneNode(true));
	}

	connectedCallback() {
		document.addEventListener('mousemove', e => {
			this.x = e.clientX;
			this.y = e.clientY;
		})

		this.initCursorSmall();	
		this.initCursorBig();

		this.shadowRoot.getElementById('cursorSmall').
			setAttribute('class', 'cursor cursorSmall ' + 
			this.getAttribute('theme') + 'Small');

		this.shadowRoot.getElementById('cursorBig').
			setAttribute('class', 'cursor cursorBig ' + 
			this.getAttribute('theme') + 'Big');
	}	

	initCursorSmall() {
		const smallCursor = this.shadowRoot.getElementById('cursorSmall');

		const render = () => {
			smallCursor.style.transform = 
				`translate(${this.x}px, ${this.y}px)`;
			requestAnimationFrame(render);
		}
		requestAnimationFrame(render);
	}

	initCursorBig() {
		const bigCursor = this.shadowRoot.getElementById('cursorBig');

		const render = () => {
			bigCursor.style.transform = 
				`translate(${this.x}px, ${this.y}px)`;
			requestAnimationFrame(render);
		}
		requestAnimationFrame(render);

	}	
}

window.customElements.define('custom-mouse', Mouse); 