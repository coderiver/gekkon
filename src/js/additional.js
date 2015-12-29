"use strict";
$(document).ready(function() {
	$('.js-testing-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		infinite: false,
		prevArrow: '.js-tesing-prev',
		nextArrow: '.js-tesing-next'
	})
});	