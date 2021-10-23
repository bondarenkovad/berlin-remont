export function  addSliderOnResize($element, $config, $media) {
	if (document.querySelector($element) !== null && document.querySelectorAll($element).length > 0) {

		var advantagesSlider = window.jQuery($element).slick($config);
		window.matchMedia('(max-width:' + $media + 'px )').matches ? advantagesSlider.slick('init')  : advantagesSlider.slick('destroy');

		var reInitializeSlider = function reInitializeSlider() {
			window.matchMedia('(max-width:'+ $media + 'px )').matches ? advantagesSlider.slick('init') : advantagesSlider.slick('destroy');
		};

		var timerId = null;
		window.addEventListener('resize', function () {
			clearTimeout(timerId);
			timerId = setTimeout(reInitializeSlider, 1000);
		});
	}
}