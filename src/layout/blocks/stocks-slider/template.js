export function stocksSlider() {
	var stocksSlider = new Swiper(".stocks-slider .swiper-container", {
		spaceBetween: 20,
		loop: true,
		navigation: {
			nextEl: ".stocks-slider .arrow_next",
			prevEl: ".stocks-slider .arrow_prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			450: {
				slidesPerView: 2,
			},
			600: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			}
		}
	});
}