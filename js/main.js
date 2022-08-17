$(document).ready(function () {
	initSlider();
	initMenu();
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

function initMenu() {
	const navigation = $('.navigation-list'),
		toggleBtn = $('.menu-btn');
	toggleBtn.on({
		click: function () {
			$(this).toggleClass('open');
			navigation.toggleClass('visible');
		},
	});
}
