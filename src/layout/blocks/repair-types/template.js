import { addSliderOnResize } from '../../common/heplers';
import SimpleBar from "simplebar";
document.addEventListener("DOMContentLoaded", function (event) {

	function repairTypes() {
		var repairTypesSlider = addSliderOnResize('.js-repair-types-slider',
			{
				slidesToShow: 3,
				infinite: false,
				slidesToScroll: 1,
				arrows: true,
				prevArrow: '<button type="button" class="slider-arrow slick-prev"><svg viewBox="0 0 16 17" id="svg-prev" xmlns="http://www.w3.org/2000/svg"><path d="M3.86175 8.17422L11.2622 0.794215C11.5047 0.552559 11.8973 0.552966 12.1393 0.795465C12.3812 1.03793 12.3806 1.43071 12.1381 1.67255L5.17809 8.61331L12.1383 15.554C12.3808 15.7959 12.3814 16.1884 12.1396 16.4309C12.0182 16.5525 11.8593 16.6133 11.7003 16.6133C11.5417 16.6133 11.3834 16.5529 11.2623 16.4322L3.86175 9.05237C3.74497 8.93618 3.67944 8.77806 3.67944 8.61331C3.67944 8.44856 3.74516 8.29062 3.86175 8.17422Z"/></svg></button>',
				nextArrow: '<button type="button" class="slider-arrow slick-next"><svg viewBox="0 0 16 17" id="svg-next" xmlns="http://www.w3.org/2000/svg"><path d="M12.1382 8.17422L4.73778 0.794215C4.49531 0.552559 4.10275 0.552966 3.86069 0.795465C3.61881 1.03793 3.61944 1.43071 3.86194 1.67255L10.8219 8.61331L3.86169 15.554C3.61922 15.7959 3.61859 16.1884 3.86044 16.4309C3.98178 16.5525 4.14075 16.6133 4.29972 16.6133C4.45828 16.6133 4.61662 16.5529 4.73774 16.4322L12.1382 9.05237C12.255 8.93618 12.3206 8.77806 12.3206 8.61331C12.3206 8.44856 12.2548 8.29062 12.1382 8.17422Z"/></svg></button>',
				responsive: [
					{
						breakpoint: 840,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 640,
						settings: {
							slidesToShow: 1
						}
					}
				]
			},
			991);
	}
	repairTypes();
	new SimpleBar(document.querySelector(".repair-types__content"), {
		autoHide: false,
	});
});

