const page = document.getElementById('page');

window.addEventListener("hashchange", changeContent, false);

function changeContent() {
	const route = window.location.href.split('#')[1];
	page.innerHTML = setinnerContent(route);
}

function setinnerContent(route) {
	if (!route) {
		return `
			<style>
				.callToAction {
					width: 100%;
					margin: auto;
					display: flex;
					justify-content: space-around;
					flex-flow: row;	
					padding-top: 2vw;				
				}
			</style>

			<back-ground islanding="true"></back-ground>
			<nav-bar theme="white" selected="1"></nav-bar>
			<custom-mouse theme="white"></custom-mouse>
			<p class="headingLanding">Dreams do come true</p>
			<p class="subHeadingLanding">
				See why hundreds of millennials choose TravelWorks to create the
			experience of a lifetime.
			</p>
			<new-button type="landing" text="Get started" class="callToAction" outlink="#curated"></new-button>
		`
	} else if (route == "curated") {
		return `
			<back-ground islanding="false"></back-ground>
			<nav-bar theme="black" selected="2"></nav-bar>
			<custom-mouse theme="black"></custom-mouse>	
			<card-carousel slide="1"></card-carousel>
			<card-slider></card-slider>		
			<p class="normalHeading">Explore our curated experiences</p>
			<p class="normalSubHeading">Choose from destinations that include Fiji, Crete, Bora Bora, and more - every location comes
			with an itinerary that allows you to make the most of your journey.</p>
		`
	} else if (route.split('&')[0] == "details") {
		return `
			<back-ground islanding="false"></back-ground>
			<nav-bar theme="white" selected="3"></nav-bar>
			<custom-mouse theme="black"></custom-mouse>	
			<card-expansion slide="slide1"></card-expansion>
			<card-slider></card-slider>
		`			
	} else if (route == "design") {
		return `
			<style>
			.heading {
				font-family:'Bahnschrift'; 
				font-size: 3.1vw; 
				text-align: center;
			}
			.subHeading {
				font-family:'Roboto Slab'; 
				font-size: 1.5vw; 
				text-align: center;
				color: #737373;
			}
			</style>
			<back-ground islanding="false"></back-ground>
			<nav-bar theme="black" selected="4"></nav-bar>
			<custom-mouse theme="black"></custom-mouse>
			<p class="heading">Design the experience of a lifetime</p>
			<p class="subHeading">Let us know what your idea of a vacation is</p>
			<drop-down fieldText="Duration" style="position: fixed; left: 50vw; top: 18vw;"></drop-down>
			<drop-down fieldText="Location" style="position: fixed; left: 30vw; top: 18vw;"></drop-down>
			<drop-down fieldText="Theme" style="position: fixed; left: 50vw; top: 25vw;"></drop-down>
			<drop-down fieldText="Biome" style="position: fixed; left: 30vw; top: 25vw;"></drop-down>
		`
	}


}