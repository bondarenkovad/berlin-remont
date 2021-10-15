export function pricesHomeTypes() {
	var pricesHomeTypesSlider = new Swiper(".prices-home-types .swiper-container", {
		slidesPerView: 6,
		spaceBetween: 14,
		navigation: {
			nextEl: ".prices-home-types .arrow_next",
			prevEl: ".prices-home-types .arrow_prev",
		},
	});
}