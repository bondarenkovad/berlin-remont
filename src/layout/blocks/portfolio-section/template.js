export function portfolioSection() {
	var portfolioSliderNav = new Swiper(".portfolio-section .slider-nav-wrap", {
		slidesPerView: 2,
		spaceBetween: 28,
		loop: true,
		initialSlide: 3,
		noSwiping: true
	});
	var portfolioSliderFor = new Swiper(".portfolio-section .slider-for-wrap", {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		navigation: {
			nextEl: ".portfolio-section .arrow_next",
			prevEl: ".portfolio-section .arrow_prev",
		},
		on: {
			slideChange: function () {
				portfolioSliderNav.slideNext();
			},
		}
	});

	var smallImages = document.querySelectorAll('.portfolio-section .small-img');

	
	smallImages.forEach(function(item) {
		console.log();
		item.addEventListener('click', function (e) {
			let fullImg = this.parentNode.parentNode.querySelector('.full-img');
			let Src = this.src;
			let Srcset = this.srcset;
			fullImg.src = Src;
			fullImg.srcset = Srcset;
		});
	});

}