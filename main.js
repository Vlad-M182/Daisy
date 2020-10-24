const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
  slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})


const headerButton = document.querySelector(".nav__button");
let nav = document.querySelector(".nav");

if (nav.style.top != "0") {
	headerButton.addEventListener("click", function(){
		nav.style.top = "0";
	});
} else {
	headerButton.addEventListener("click", function(){
		nav.style.top = "-200%";
	});
}

