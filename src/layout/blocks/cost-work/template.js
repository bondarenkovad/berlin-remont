import SimpleBar from "simplebar";

document.addEventListener("DOMContentLoaded", function (event) {


	let costElements = document.querySelectorAll(".cost-work__content");

	for (let index = 0; index < costElements.length; index++) {
		new SimpleBar( costElements[index], {
			autoHide: false,
		});
	}
});
