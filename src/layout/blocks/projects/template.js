window.jQuery('.projects__thumb-slide').on('click', function() {
	window.jQuery(this)
		.addClass('active').siblings().removeClass('active')
		.closest('.projects__left').find('.projects__main-slide').removeClass('active')
		.eq(window.jQuery(this).index()).addClass('active');
});
