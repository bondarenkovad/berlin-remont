export function header() {
	function chooseCity() {
		var widget = document.querySelector('.js-choose-city');
		var widgetCurrent = widget.querySelector('.choose-city__current');

		document.addEventListener("click", (e) => {
			let targetElement = e.target; // clicked element

			do {
				if (targetElement == widget) {
					// This is a click inside. Do nothing, just return.
					e.preventDefault();
					widget.classList.toggle('active');
					return;
				}
				// Go up the DOM
				targetElement = targetElement.parentNode;
			} while (targetElement);

			// This is a click outside.
			widget.classList.remove('active');
		});
	}
	chooseCity();

	var burger = document.querySelector('.burger');
	var mobileMenu = document.querySelector('.header .container.mobile .header-row_bottom');
	burger.addEventListener('click', () => {
		burger.classList.toggle("open");
		mobileMenu.classList.toggle('show');
	});
	// burger.forEach(icon => {
	// });
	
	function toggleSubmenu() {
		var subArrow = document.querySelectorAll('.mobile-menu .subarrow');
		subArrow.forEach(item => {
			item.addEventListener('click', () => {
				// console.dir(item);
				item.offsetParent.classList.toggle('show');
			});
		});
	}
	function initMobileMenu() {
		toggleSubmenu();
	}
	initMobileMenu();
}