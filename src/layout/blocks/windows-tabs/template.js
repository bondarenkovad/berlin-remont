export function windowsTabs() {
	var windowsTabsSlider = document.querySelectorAll('.windows-tabs .swiper-container');

	windowsTabsSlider.forEach(function(item) {
		item = new Swiper(item, {
			spaceBetween: 30,
			navigation: {
				nextEl: item.previousElementSibling.lastElementChild,
				prevEl: item.previousElementSibling.firstElementChild
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
				},
			}
		});
	});

}