"use strict";
$(document).ready(function() {

	$(".js-slider-small").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.js-slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.js-slider-nav'
	});

	$('.js-slider-nav').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.js-slider-for',
		dots: false,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

	$(".js-slider-info").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		pauseOnDotsHover: true

	});

	$(".js-slider-items").each(function () {
		var self = $(this);
		self.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: true,
			appendArrows: self.parents(".slider-items"),
			responsive: [
				{
					breakpoint: 1023,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	});

	$(".js-slider-mobile").each(function () {
		var self = $(this);
		self.slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			appendArrows: self.parents(".slider-items"),
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	});

	$(".js-raty").raty({
		score: function() {
			return $(this).attr('data-score');
		},
		starType: "i",
		hints: ['1', '2', '3', '4', '5']

	});

	$(".js-raty-readonly").raty({
		readOnly: true,
		score: function() {
			return $(this).attr('data-score');
		},
		hints: ['1', '2', '3', '4', '5'],
		starType: "i",
	});

	$("#from").datepicker({
		changeMonth: true,
		numberOfMonths: 1,
		firstDay: 1,
		onClose: function( selectedDate ) {
			$( "#to" ).datepicker( "option", "minDate", selectedDate );
			$( "#to" ).datepicker( "show" );
		}
	});

	$("#to").datepicker({
		changeMonth: true,
		numberOfMonths: 1,
		firstDay: 1,
		onClose: function( selectedDate ) {
			$( "#from" ).datepicker( "option", "maxDate", selectedDate );
		}
	});

	$('.js-testing-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		infinite: false,
		fade: true,
		prevArrow: '.js-tesing-prev',
		nextArrow: '.js-tesing-next'
	});

	$('.js-fancybox').fancybox({
		helpers: {
			overlay: {
			  locked: false
			}
		}
	});

	//mask
	$('[type="tel"]').mask("+7 (999) 999 - 99 - 99");

});
