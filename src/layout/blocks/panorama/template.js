export function panorama() {
	var panoramaSlider = new Swiper(".panorama .swiper-container", {
		slidesPerView: 4,
		spaceBetween: 20,
		navigation: {
			nextEl: ".panorama .arrow_next",
			prevEl: ".panorama .arrow_prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			450: {
				slidesPerView: 2,
			},
			700: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			}
		}
	});
}
