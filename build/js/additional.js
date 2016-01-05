"use strict";
$(document).ready(function() {
	$('.js-testing-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		infinite: false,
		fade: true,
		prevArrow: '.js-tesing-prev',
		nextArrow: '.js-tesing-next'
	})
	$('.js-show-password').on('mousedown', function () {
		var input = $(this).siblings('.js-password-input');
		input.attr("type", "text");
		return false;
	})
	$('.js-show-password').on('mouseup', function () {
		var input = $(this).siblings('.js-password-input');
		input.attr("type", "password");
	});
});	