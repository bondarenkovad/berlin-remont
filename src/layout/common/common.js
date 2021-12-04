// import "jquery-lazy/jquery.lazy";
// import "magnific-popup/dist/jquery.magnific-popup.min";
import SimpleBar from "simplebar";
import "../blocks/repair-types/template";
import { apartments } from "../blocks/apartments/template";
import "../blocks/faq/faq";
import "../blocks/services/template";
import "../blocks/cost-work/template";
import "../blocks/color-table/template";
import "../blocks/projects/template";
import "../blocks/gallery/template";
import "../blocks/broke/template";
import "../blocks/services-w/template";
import "../blocks/examples/template";
import "../blocks/price-cards/template";
import "../blocks/stages/template";
import "../blocks/table-f/template";
import "../blocks/project-calc/template";
import "../blocks/quize/template";
import "../blocks/certified/template";
//import "../blocks/problems/template";


window.jQuery(function () {
  apartments();
	window.jQuery('img[data-src]').Lazy({scrollDirection: 'vertical', effect: 'fadeIn',});

	window.jQuery(".js-popup-call").magnificPopup({
		type: "inline",
		preloader: false,
	});
});



