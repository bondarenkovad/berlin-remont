export function infoCards() {
	var infoItemMoreBtn = document.querySelectorAll('.js-more');

	infoItemMoreBtn.forEach(currentItem => {
		// скрываем кнопку показать больше если не хватает текста
		let itemText = currentItem.parentNode.querySelector('.info-card__text');
		if (itemText.scrollHeight < 205) {
			currentItem.parentNode.classList.add('hide-btn');
		} else {
			currentItem.parentNode.classList.remove('hide-btn');
		}

		// при клике на кнопку показываем весь текст
		currentItem.addEventListener('click', function (e) {
			e.preventDefault();

			if (currentItem.parentNode.classList.contains('show-text')) {
				currentItem.parentNode.classList.remove('show-text');
			} else {
				currentItem.parentNode.classList.add('show-text');
			}
			
		});
	});
}