const hamburger = document.querySelector(".hamburger");
const bars = document.querySelectorAll(".hamburger > span");

const navSlide = document.querySelector(".nav-mobile");

function animateHamburger() {
	navSlide.classList.toggle("nav-mobile-show");
	bars.forEach((e) => {
		e.classList.toggle("bar");
		// console.log("dodało klase bar");
	});
}

hamburger.addEventListener("click", animateHamburger);
