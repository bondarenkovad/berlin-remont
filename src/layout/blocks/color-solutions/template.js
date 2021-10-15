export function colorSolutions() {
	var colorSolutionsSlider = document.querySelectorAll('.color-solutions .swiper-container');

	colorSolutionsSlider.forEach(function (item) {
		item = new Swiper(item, {
			spaceBetween: 10,
			navigation: {
				nextEl: item.previousElementSibling.lastElementChild,
				prevEl: item.previousElementSibling.firstElementChild
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				400: {
					slidesPerView: 2,
				},
				500: {
					slidesPerView: 3,
				},
				900: {
					slidesPerView: 6,
				},
				1200: {
					slidesPerView: 8,
				},
			}
		});
	});

	var colorSolutionsSlide = document.querySelectorAll('.color-solutions .slider-slide');
	var colorSolutionsFrame = document.querySelector('.color-solutions__frame');
	var colorSolutionsHandle = document.querySelector('.color-solutions__handle');
	var colorSolutionsPath = 'img/color-solutions/';

	colorSolutionsSlide.forEach(function (item) {
		item.addEventListener('click', function (e) {
			let name = item.getAttribute('data-name');
			let nameWebp = item.getAttribute('data-name2');
			let parent = item.parentElement;
			let childrens = parent.children;

			if (parent.classList.contains('slider-frame')) {
				colorSolutionsFrame.src = colorSolutionsPath + 'lamination' + name;
				colorSolutionsFrame.setAttribute('srcset', colorSolutionsPath + 'lamination/' + nameWebp);
			}
			if (parent.classList.contains('slider-handle')) {
				colorSolutionsHandle.src = colorSolutionsPath + 'handle' + name;
				colorSolutionsHandle.setAttribute('srcset', colorSolutionsPath + 'handle/' + nameWebp);
			}

			item.classList.add('active');
		});
	});
}