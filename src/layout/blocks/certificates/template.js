export function certificates() {
	var certificatesSlider = new Swiper(".certificates .swiper-container", {
		slidesPerView: "auto",
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: ".certificates .arrow_prev",
			prevEl: ".certificates .arrow_next",
		},
	});
}