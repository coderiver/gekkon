"use strict";
$(document).ready(function() {

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
		pauseOnDotsHover: true,
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

	$(".js-slider-items").slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		infinite: false,
		appendArrows: ".slider-items"
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

	var checkbox = {
		init: function(option) {
			this._parentClass = option.parent;
			this._$checkbox = $(option.checkbox);
			this._bindEvent();
		},
		reset: function(option) {
			this._parentClass = option.parent;
			this._$checkbox = $(option.checkbox);
			this._$reset = $(option.reset);
			this._resetEvent();
		},
		_bindEvent: function() {
			this._$checkbox.on("change", this._changeStates);
		},
		_changeStates: function(event) {
			var checkbox = $(event.currentTarget);
			if(checkbox.is(":checked")) {
				checkbox.parents(this._parentClass).addClass("is-active");
			}
			else {
				checkbox.parents(this._parentClass).removeClass("is-active");
			}
		},
		_resetEvent: function() {
			this._$reset.on("click", this._resetStates);
		},
		_resetStates: function() {
			this._$checkbox.attr("checked", false);
		}
	}
	checkbox.init({
		parent: ".js-check",
		checkbox: ".js-checkbox"
	});

	checkbox.reset({
		reset: ".js-clear-checkbox",
		parent: ".js-check",
		checkbox: ".js-checkbox"
	});

	var checkTarget = {
		init: function(option) {
			this._$el = $(".js-check-target");
			this._bindEvent();
		},
		_bindEvent: function() {
			this._$el.on("click", this._selectTarget);
		},
		_selectTarget: function(event) {
			var el = $(event.target);
			var target = $('[data-target-name="'+el.data("target")+'"]');
			if (target.length) {
				target.trigger("click");
			}
			event.stopPropagation();
		}
	}
	checkTarget.init();

	$( "#from" ).datepicker({
		changeMonth: true,
		numberOfMonths: 1,
		firstDay: 1,
		onClose: function( selectedDate ) {
			$( "#to" ).datepicker( "option", "minDate", selectedDate );
			$( "#to" ).datepicker( "show" );
		}
	});
	$( "#to" ).datepicker({
		changeMonth: true,
		numberOfMonths: 1,
		firstDay: 1,
		onClose: function( selectedDate ) {
			$( "#from" ).datepicker( "option", "maxDate", selectedDate );
		}
	});

});