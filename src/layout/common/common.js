import { repairTypes } from "../blocks/repair-types/templates";
import { apartments } from "../blocks/apartments/template";
import "../blocks/services/template";
// import { contact } from "../blocks/contact/template.js";
// import { beforeAfter } from "../blocks/before-after/template.js";
// import { infoCards } from "../blocks/info-cards/template.js";
// import { certificates } from "../blocks/certificates/template.js";
// import { stocksSlider } from "../blocks/stocks-slider/template.js";
// import { repairVariants } from "../blocks/repair-variants/template.js";
// import { repairMaterial } from "../blocks/repair-materials/template.js";
// import { windowsTabs } from "../blocks/windows-tabs/template.js";
// import { pricesHomeTypes } from "../blocks/prices-home-types/template.js";
// import { portfolioSection } from "../blocks/portfolio-section/template.js";
// import { panorama } from "../blocks/panorama/template.js";
// import { colorSolutions } from "../blocks/color-solutions/template.js";

$(function () {
  repairTypes();
  apartments();
});

//
// document.addEventListener("DOMContentLoaded", function (event) {
//
// 	// var telephone = document.querySelectorAll('input[type="tel"]');
// 	// var im = new Inputmask("+7 (999) 999-99-99");
// 	// im.mask(telephone);
// 	//
// 	// header();
// 	//
// 	// var tabs = function () {
// 	// 	let tabNav = document.querySelectorAll('.tabs-list__link'),
// 	// 		tabContent = document.querySelectorAll('.tabs-tab'),
// 	// 		tabName;
// 	//
// 	// 	tabNav.forEach(item => {
// 	// 		item.addEventListener('click', selectTabNav)
// 	// 	});
// 	//
// 	// 	function selectTabNav(e) {
// 	// 		e.preventDefault();
// 	// 		tabNav.forEach(item => {
// 	// 			item.classList.remove('active');
// 	// 		});
// 	// 		this.classList.add('active');
// 	// 		tabName = this.getAttribute('data-tab');
// 	// 		selectTabContent(tabName);
// 	// 	}
// 	//
// 	// 	function selectTabContent(tabName) {
// 	// 		tabContent.forEach(item => {
// 	// 			if (item.getAttribute('data-tab') == tabName) {
// 	// 				item.classList.add('active');
// 	// 			} else {
// 	// 				item.classList.remove('active');
// 	// 			}
// 	// 		})
// 	// 	}
// 	// };
// 	// tabs();
// 	//
// 	// beforeAfter();
// 	// repairVariants();
// 	// repairMaterial();
// 	// pricesHomeTypes();
// 	// portfolioSection();
// 	// panorama();
// 	// stocksSlider();
// 	// colorSolutions();
// 	// windowsTabs();
// 	// infoCards();
// 	// certificates();
// 	// contact();
// });
