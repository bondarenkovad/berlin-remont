import SimpleBar from "simplebar";

document.addEventListener("DOMContentLoaded", function (event) {
	const tableSections = document.querySelectorAll('.table-f');

	if(tableSections.length){
		const tableWrappers = document.querySelectorAll('.table-f__wrapper');

		if(tableWrappers.length) {
			for (let i=0; i < tableWrappers.length; i++){
				new SimpleBar( tableWrappers[i], {
					autoHide: false,
				});
			}
		}
	}
});
