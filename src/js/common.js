"use strict";
$(document).ready(function() {
	"use strict";
	function number() { 
		var number = $(".js-number");
		number.each(function(){
			var max_number = +($(this).attr("data-max-number"));
			var input = $(this).find("input");
			var plus = $(this).find(".js-plus-number");
			var minus = $(this).find(".js-minus-number");
			plus.on("click", function(){
				var val = +(input.val());
				if (val >= max_number) {
					return false
				}
				else {
					val += 1;
					input.val(val);
				}
			});
			minus.on("click", function(){
				var val = +(input.val());
				if (val > 1) {
					val -= 1;
					input.val(val);
				}
				return false;
			});
			input.on("change", function(){
				var val = +$(this).val();
				if (val > max_number) {
					val = max_number;
					$(this).val(val);
				}
				if (val == '') {
					val = 1;
					$(this).val(val);
				}
			});
		});
	}
	number();

	// masonry
	$('.js-masonry').masonry({
		 itemSelector: '.js-masonry > div'
	})

	$('.js-tabs a').on("click", function(event) {
		event.preventDefault();
		$(this).tab('show');
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

	$('.js-slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.js-slider-nav'
	});
	$('.js-slider-nav').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.js-slider-for',
		dots: false,
		focusOnSelect: true
	});

	$(".js-raty").raty({
		score: function() {
			return $(this).attr('data-score');
		},
		starType: "i",
		hints: ['1', '2', '3', '4', '5']
		
	});
	$('.js-raty-readonly').raty({
		readOnly: true,
		score: function() {
		    return $(this).attr('data-score');
		},
		hints: ['1', '2', '3', '4', '5'],
		starType: "i",
	});

	var connect = {
		init: function() {
			this._dom();
			this._bindEvent();
		},
		_dom: function() {
			this._$el = $(".js-connector");
			this._$target = $(".js-connect");
			this._root = ".js-connector-root";
		},
		_bindEvent: function() {
			this._$el.on("click", this._changePos.bind(this));
		},
		_changePos: function(event) {
			var $el = $(event.currentTarget);
			var top = $el.position({
				of: this._root
			}).top;
			var left = $el.position({
				of: this._root
			}).left;
			var width = $(event.currentTarget).outerWidth();
			console.log(top);
			console.log(left);
			console.log(event.currentTarget);
			this._$target.css({
				left: +left+width,
				top: top,
				display: "block"
			});
		}
	}
	connect.init();
			

});