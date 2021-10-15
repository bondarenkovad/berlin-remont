export function repairMaterial() {
	var repairMaterialSlider = new Swiper(".repair-materials .swiper-container", {
		spaceBetween: 0,
		slidesPerColumnFill: 'row',
		navigation: {
			nextEl: ".repair-materials .arrow_next",
			prevEl: ".repair-materials .arrow_prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				slidesPerColumn: 1,
			},
			700: {
				slidesPerView: 2,
				slidesPerColumn: 2,
			}
		}
	});
}