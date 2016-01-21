"use strict";
$(document).ready(function() {
	
	
		$('.js-show-password').hover(
			function(){
				$('.js-show-password').on('mousedown', function () {
					$(this).addClass("is-active");
					var input = $(this).siblings('.js-password-input');
					input.attr("type", "text");
					return false;
				});
				$('.js-show-password').on('mouseup', function () {
					$(this).removeClass("is-active");
					var input = $(this).siblings('.js-password-input');
					input.attr("type", "password");
					return false;
				});
			},
			function(){
				$(this).removeClass("is-active");
				var input = $(this).siblings('.js-password-input');
				input.attr("type", "password");
				return false;
			}
		);
		
	

	

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