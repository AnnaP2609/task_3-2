$(document).ready(function () {
	initSlider();
});
function initSlider() {
	'use strict;';
	$('.reviews-list').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,

		responsive: [
			{
				breakpoint: 1124,
				settings: {
					dots: true,
				},
			},
		],
	});
}
