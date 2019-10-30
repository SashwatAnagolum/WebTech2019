const page = document.getElementById('page');

window.addEventListener("hashchange", changeContent, false);

function changeContent() {
	console.log('hi!')
	const route = window.location.href.split('#')[1];
	page.innerHTML = setinnerContent(route);
}

function setinnerContent(route) {
	if (!route) {
		return `
			<back-ground islanding="true"></back-ground>
			<nav-bar theme="white" selected="1"></nav-bar>
			<custom-mouse theme="white"></custom-mouse>
			<p class="headingLanding">Dreams do come true</p>
			<p class="subHeadingLanding">
				See why hundreds of millennials choose TravelWorks to create the
			experience of a lifetime.
			</p>
		`
	}
}