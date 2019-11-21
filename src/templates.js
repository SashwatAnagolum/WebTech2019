const page = document.getElementById('page');
const background = document.getElementById('background');
const mouse = document.getElementById('mouse');

window.addEventListener("hashchange", changeContent, false);

function changeContent() {
	const route = window.location.href.split('#')[1];
	page.innerHTML = setinnerContent(route);
}

function setinnerContent(route) {
	if (!route) {
		background.setAttribute("islanding", "true");
		mouse.setAttribute("theme", "white");

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

			<nav-bar theme="white" selected="1" text="Sign in" outlink="#login"></nav-bar>
			<p class="headingLanding">Dreams do come true</p>
			<p class="subHeadingLanding">
				See why hundreds of millennials choose TravelWorks to create the
			experience of a lifetime.
			</p>
			<new-button type="landing" text="Get started" class="callToAction" outlink="#curated"></new-button>
		`
	} else {
		background.setAttribute("isLanding", "false");
		mouse.setAttribute("theme", "black");

		if (route.split('&')[0] == "details") {
			mouse.setAttribute("theme", "white");	
			window.addEventListener('click', (e) => {
				var slider = document.getElementById('cardSlider');
				var carousel = document.getElementById('cardExpansion');
				if (e.target == slider) {
					carousel.setAttribute('slide', +(slider.getAttribute('slideNum')) + 1)
				}
			});

			return `
				<nav-bar theme="white" selected="3" text="Sign in" outlink="#login"></nav-bar>
				<card-expansion id="cardExpansion" slide="1"></card-expansion>
				<card-slider id="cardSlider" numSlides="4" slideNum="1"></card-slider>
			`			
		} else if (route == "curated") {
			window.addEventListener('click', (e) => {
				var slider = document.getElementById('cardSlider');
				var carousel = document.getElementById('cardCarousel');
				if (e.target == slider && route == "curated") {
					carousel.setAttribute('slide', +(slider.getAttribute('slideNum')) + 1)
				}
			});

			return `	
				<nav-bar theme="black" selected="2" loggedIn="true" text="Sign Up" outlink="#signUp"></nav-bar>	
				<card-carousel id="cardCarousel" slide="1"></card-carousel>
				<card-slider id="cardSlider" numSlides="2" slideNum="1"></card-slider>	
				<p class="normalHeading">Explore our curated experiences</p>
				<p class="normalSubHeading">Choose from destinations that include Tahiti, Berlin, Bora Bora, and more - every location comes
				with an itinerary that allows you to make the most of your journey.</p>
			`
		} else if (route == "design") {
			window.addEventListener('click', (e) => {
				create = document.getElementById('create') 
				if (e.target == create) {
					duration = document.getElementById('Duration').drop.selectedIndex;
					duration = document.getElementById('Duration').drop[duration].getAttribute('value')
					country = document.getElementById('Location').drop.selectedIndex;
					country = document.getElementById('Location').drop[country].getAttribute('value')
					theme = document.getElementById('Theme').drop.selectedIndex;
					theme = document.getElementById('Theme').drop[theme].getAttribute('value')
					biome = document.getElementById('Biome').drop.selectedIndex;
					biome = document.getElementById('Biome').drop[biome].getAttribute('value')
					changeUrl = "#customtrip&Location=" + country + "&Duration=" + duration + "&theme=" + theme + "&biome=" + biome
					window.location.hash = changeUrl
				}
			})
			return `
				<nav-bar theme="black" selected="4" text="Sign In" outlink="#login"></nav-bar>
				<p class="heading">Design the experience of a lifetime</p>
				<p class="subHeading">Let us know what your idea of a vacation is</p>
				<drop-down fieldText="Duration" id="Duration" style="position: fixed; left: 50vw; top: 18vw;"></drop-down>
				<drop-down fieldText="Location" id="Location" style="position: fixed; left: 30vw; top: 18vw;"></drop-down>
				<drop-down fieldText="Theme" id="Theme" style="position: fixed; left: 50vw; top: 25vw;"></drop-down>
				<drop-down fieldText="Biome" id="Biome" style="position: fixed; left: 30vw; top: 25vw;"></drop-down>
				<other-button  id="create" type="grey" text="Create a trip" class="callToAction" check="False" style="position: fixed; left: 45vw; top: 34vw;"></other-button>
			`
		} else if (route == "login") {
			return `
				<style>
					a {
						color: black;	
					}

					.headingTwo {
						position: absolute;
						top: 3.9vw;
						left: 40vw;
					}

					.signup {
						font-family:'Roboto Slab'; 
						font-size: 1vw; 
						text-align: center;
						position: absolute;
						top: 38vw;
						left: 44vw;
					}
					.signUpLink {
						z-index: -1;
						height: 2vw;
						width: 7vw;
						font-family:'Roboto Slab'; 
						font-size: 1vw; 
						text-align: center;
						position: absolute;
						top: 39vw;
						left: 51vw;
						background-color: transparent;
						font-color: black;
					}
				</style>
				<nav-bar theme="black" selected="" text="Sign Up" outlink="#signUp"></nav-bar>
				<p class="heading headingTwo">Welcome back</p>
				<form-input type="text" name="Email" style="position: fixed; left: 41vw; top: 15vw;"></form-input>
				<form-input type="password" name="Password" style="position: fixed; left: 41vw; top: 22vw;"></form-input>
				<new-button type="grey" text="Log in" class="callToAction" outlink="#curated" style="position: fixed; left: 46.5vw; top: 35.5vw;"></new-button>
				<p class="signup">Not a member?</p><a href="#signUp" class="signUpLink">Sign up here</a>
			`
		} else if (route == 'signUp') {
			return `
				<style>
					a {
						color: black;
					}

					.heading {
						position: absolute;
						top: 3.9vw;
						left: 41vw;
					}

					.member {
						font-family:'Roboto Slab'; 
						font-size: 1vw; 
						text-align: center;
						position: absolute;
						top: 39.5vw;
						left: 44.5vw;
					}

					.signUpLink {
						z-index: -1;
						height: 2vw;
						width: 7vw;
						font-family:'Roboto Slab'; 
						font-size: 1vw; 
						text-align: center;
						position: absolute;
						top: 40.5vw;
						left: 52vw;
						background-color: transparent;
						font-color: black;
					}
				</style>
				<nav-bar theme="black" selected="" text="Sign In" outlink="#login"></nav-bar>
				<p class="heading">Join the club</p>
				<form-input type="text" name="Email" style="position: fixed; left: 41vw; top: 14vw;"></form-input>
				<form-input type="password" name="Create password" style="position: fixed; left: 41vw; top: 21vw;"></form-input>
				<form-input type="password" name="Confirm password" style="position: fixed; left: 41vw; top: 28vw;"></form-input>
				<new-button type="grey" text="Sign up" class="callToAction" outlink="#curated" style="position: fixed; left: 46.5vw; top: 37vw;"></new-button>
				<p class="member">Already a member? </p><a href="#login" class="signUpLink">Log in</a>
			`
		} else if (route.split('&')[0] == 'relive') {
			window.addEventListener('click', (e) => {
				var slider = document.getElementById('cardSlider');
				var carousel = document.getElementById('cardCarousel');
				if (e.target == slider && route.split('&')[0] == 'relive') {
					carousel.setAttribute('slide', +(slider.getAttribute('slideNum')) + 1)
				}
			});

			return `
				<nav-bar theme="black" selected="5" text="Sign out"></nav-bar>
				<card-carousel id="cardCarousel" slide="1"></card-carousel>
				<card-slider id="cardSlider" numSlides="2" slideNum="1"></card-slider>	
				<p class="normalHeading">Relive your favourite memories</p>
				<p class="normalSubHeading">Look at the trips you've saved to your collection.</p>
			`	
		} else if (route.split("&")[0] == 'customtrip') {
			mouse.setAttribute("theme", "white");	
			window.addEventListener('click', (e) => {
				var slider = document.getElementById('cardSlider');
				var carousel = document.getElementById('cardExpansion');
				if (e.target == slider && route.split("&")[0] == 'customtrip') {
					carousel.setAttribute('slide', +(slider.getAttribute('slideNum')) + 1)
				}
			});

			return `
				<nav-bar theme="white" selected="3" text="Sign in" outlink="#login"></nav-bar>
				<card-expansion id="cardExpansion" slide="1"></card-expansion>
				<card-slider id="cardSlider" numSlides="4" slideNum="1"></card-slider>
			`		
		}
	}
}

function extractParams(string) {
	let params = string.split('&');
	for (var i = 0; i < params.length; i ++) {
		let pair = params[i].split('=');
		queryParams[pair[0]] = decodeURIComponent(pair[1]);
	}
	return queryParams;
}