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
	$('.js-fancybox').fancybox({
		// prevEffect		: 'none',
		// nextEffect		: 'none',
		helpers: {
		    overlay: {
		      locked: false
		    }
		  }
		});

    $("body").on("click", ".js-select-text", function(event) {

        var select = $(this).parents(".js-select");
        if (select.hasClass("is-active")) {
            $(".js-select").removeClass("is-active");
        } else {
            $(".js-select").removeClass("is-active");
            select.toggleClass("is-active")
        }

    });
    $('select').on('change', function() {
            var val = $(this).find('option:selected').val();
            $(this).siblings(".js-select-text").text(val);
        });

});	