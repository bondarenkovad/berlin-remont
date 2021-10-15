export function repairVariants() {
	var repairVariantsSlider = new Swiper(".repair-variants .swiper-container", {
		spaceBetween: 24,
		navigation: {
			nextEl: ".repair-variants .arrow_next",
			prevEl: ".repair-variants .arrow_prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			700: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			}
		}
	});
}