import SimpleBar from "simplebar";

if (typeof Object.assign != "function") {
	Object.defineProperty(Object, "assign", {
		value: function assign(target, varArgs) {
			"use strict";
			if (target == null) {
				throw new TypeError("Cannot convert undefined or null to object");
			}
			var to = Object(target);
			for (var index = 1; index < arguments.length; index++) {
				var nextSource = arguments[index];
				if (nextSource != null) {
					for (var nextKey in nextSource) {
						if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
							to[nextKey] = nextSource[nextKey];
						}
					}
				}
			}
			return to;
		},
		writable: true,
		configurable: true,
	});
}

class Quize {
	constructor(options) {
		let defaultOptions = {
			sliderEl: ".quize__steps",
			qustionEl: ".quize__step",
			totalQuestionsCountEl: ".quize__total",
			currentQuestionEl: ".quize__current",
			dotsWrapperEl: ".quize__dots",
			dotEl: "quize__dot",
			dotActiveClass: "quize__dot--active",
			navPrevCssClass: ".quize__prev",
			navNextCssClass: ".quize__next",
			navActiveClass: "quize__btn--active",
			inputCssClass: ".quize__input-hide",
			dataInputCssClass: ".quize__data-input",
			warningMessage: ".quize__warning",
			submitBtn: ".quize__submit",
			resultDiscount: "#total-discount",
			initialDiscount: 9000,
		};
		this.options = Object.assign(defaultOptions, options);
		this.questions = document.querySelectorAll(this.options.qustionEl);
		this.dotsWrapperEl = document.querySelector(this.options.dotsWrapperEl);
		this.btnNext = document.querySelector(this.options.navNextCssClass);
		this.btnPrev = document.querySelector(this.options.navPrevCssClass);
		this.inputs = document.querySelectorAll(this.options.inputCssClass);
		this.dataInputs = document.querySelectorAll(this.options.dataInputCssClass);
		this.warningMessageEl = document.querySelector(this.options.warningMessage);
		this.currentQuestionEl = document.querySelector(
			this.options.currentQuestionEl
		);
		this.totalQuestionEl = document.querySelector(
			this.options.totalQuestionsCountEl
		);
		this.form = document.querySelector(this.options.sliderEl);
		this.result = document.querySelector(this.options.resultDiscount);
		this.dataInputsObj = {};
		//init
		this.slider = $(this.options.sliderEl).slick({
			lazyLoad: "ondemand",
			swipe: false,
			cssEase: "ease",
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			fade: true,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						adaptiveHeight: true,
					},
				},
			],
		});
		this.renderDots();
		this.changeActiveBtn(0);
		//this.changeResultDiscount(0);
		this.setTotalQuestion(this.questions.length);
		this.dots = document.querySelectorAll(`.${this.options.dotEl}`);
		this.btnNext.addEventListener("click", {
			handleEvent: this.changeToNextQuestion,
		});
		this.btnPrev.addEventListener("click", {
			handleEvent: this.changeToPrevQuestion,
		});
		this.form.addEventListener("submit", { handleEvent: this.submitHandler });
		for (let i = 0; i < this.inputs.length; i++) {
			this.inputs[i].addEventListener("change", (e) => {
				this.hideWarningMessage();
				this.setVariantToDataInput(e.target.name, e.target.value);
			});
		}
		this.changeDotsActiveClass = this.changeDotsActiveClass.bind(this);
		this.formatDataObjectFromInputs(this.dataInputs);
	}
	//methods
	changeToNextQuestion = (event) => {
		event.preventDefault();

		if (this.checkVariantSelected()) {
			this.slider.slick("slickNext");
			let current = this.slider.slick("slickCurrentSlide");
			this.changeDotsActiveClass(current);
			this.setCurrentQestion(current * 1 + 1);
			this.changeActiveBtn(current);
			//this.changeResultDiscount(current);
		} else {
			this.showWarningMessage();
		}
	};
	changeToPrevQuestion = (event) => {
		event.preventDefault();
		this.slider.slick("slickPrev");
		let current = this.slider.slick("slickCurrentSlide");
		this.changeDotsActiveClass(current);
		this.setCurrentQestion(current * 1 + 1);
		this.hideWarningMessage();
		this.changeActiveBtn(current);
		//this.changeResultDiscount(current);
	};
	renderDots = () => {
		for (let i = 0; i < this.questions.length; i++) {
			if (i === 0) {
				this.dotsWrapperEl.insertAdjacentHTML(
					"beforeend",
					`<li class="${this.options.dotEl} ${this.options.dotActiveClass}">${i+1}</li>`
				);
			} else {
				this.dotsWrapperEl.insertAdjacentHTML(
					"beforeend",
					`<li class="${this.options.dotEl}">${i+1}</li>`
				);
			}
		}
	};
	changeDotsActiveClass = (current) => {
		for (let i = 0; i < this.questions.length; i++) {
			this.dots[i].classList.remove(this.options.dotActiveClass);
		}
		this.dots[current].classList.add(this.options.dotActiveClass);
	};
	checkVariantSelected = () => {
		const inputs = document.querySelectorAll(
			`.slick-current ${this.options.inputCssClass}`
		);
		let flag = false;
		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].checked) {
				flag = true;
				break;
			}
		}
		return flag;
	};
	showWarningMessage = () => {
		this.warningMessageEl.style.cssText = "display:block;";
	};
	hideWarningMessage = () => {
		this.warningMessageEl.style.cssText = "display:none;";
	};
	setCurrentQestion = (current) => {
		this.currentQuestionEl.innerText = current;
	};
	setTotalQuestion = (total) => {
		this.totalQuestionEl.innerText = total;
	};
	changeActiveBtn = (current) => {
		if (current * 1 + 1 === this.questions.length) {
			this.btnNext.classList.remove(this.options.navActiveClass);
			this.btnPrev.classList.add(this.options.navActiveClass);
		}
		if (current === 0) {
			this.btnNext.classList.add(this.options.navActiveClass);
			this.btnPrev.classList.remove(this.options.navActiveClass);
		}
		if (current * 1 + 1 < this.questions.length && current !== 0) {
			this.btnNext.classList.add(this.options.navActiveClass);
			this.btnPrev.classList.add(this.options.navActiveClass);
		}
	};
	submitHandler = (event) => {
		event.preventDefault();
	};
	changeResultDiscount = (current) => {
		let total = (current * 1 + 1) * 1000 + this.options.initialDiscount;
		this.result.innerText = total;
	};
	formatDataObjectFromInputs(inputs) {
		for (let index = 0; index < inputs.length; index++) {
			const element = inputs[index];
			const elementDataValue = element.getAttribute("name");
			this.dataInputsObj[elementDataValue] = element;
		}
	}
	setVariantToDataInput(name, value) {
		const currentDataInput = this.dataInputsObj[name];
		currentDataInput.value = value;
	}
}


document.addEventListener("DOMContentLoaded", function (event) {
	//quize init
	const quizeEl = document.querySelectorAll(".quize");
	if (quizeEl.length) {

		let quize = new Quize();
	}
});
