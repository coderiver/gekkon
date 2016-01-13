"use strict";
$(document).ready(function() {

	$(document).on("click", function() {
		connect.hide();
	});

	// get scroll width;
	var scrollWidth;

	function getScrollBarWidth() {
		var inner = document.createElement('p');
		inner.style.width = "100%";
		inner.style.height = "200px";

		var outer = document.createElement('div');
		outer.style.position = "absolute";
		outer.style.top = "0px";
		outer.style.left = "0px";
		outer.style.visibility = "hidden";
		outer.style.width = "200px";
		outer.style.height = "150px";
		outer.style.overflow = "hidden";
		outer.appendChild(inner);

		document.body.appendChild(outer);
		var w1 = inner.offsetWidth;
		outer.style.overflow = 'scroll';
		var w2 = inner.offsetWidth;
		if (w1 == w2) w2 = outer.clientWidth;

		document.body.removeChild(outer);
		if ($("html").hasClass("desktop")) {
			scrollWidth = w1 - w2;
		} else {
			scrollWidth = 0;
		}

		return scrollWidth;

	}
	getScrollBarWidth();

	if ($("html").hasClass("desktop")) {
		if (body.hasClass("no-scroll")) {
			body.css({
				marginRight: scrollWidth
			});

		}
	}

	function number() { 
		var number = $(".js-number");
		number.each(function(){
			var max_number = +($(this).attr("data-max-number"));
			var input = $(this).find("input");
			var plus = $(this).find(".js-plus-number");
			var minus = $(this).find(".js-minus-number");
			var reg = /^[0-9]*$/gm;
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
			input.on("keyup", function(){
				var val = +$(this).val();
				if(!val) {
					$(this).val(function(index,value){
									return value.substr(0,value.length-1);
								})
				}
			});
		});
	}
	number();

	// masonry
	setTimeout(function () {
		$('.js-masonry').masonry({
			itemSelector: '.js-masonry > div'
		});
	}, 300)
	

	$('.js-tabs a').on("click", function(event) {
		event.preventDefault();
		$(this).tab('show');
	});

	var goToTab = {
		init: function(option) {
			this._$el = $(".js-btn-tab");
			this._$root = $("html, body");
			this._bindEvent();
		},
		_bindEvent: function() {
			this._$el.on("click", this._switchTab.bind(this));
		},
		_switchTab: function(event) {
			var el = $(event.target);
			this._tab = $(event.target).data("tab");
			var top = $('a[href="'+this._tab+'"]').offset().top;
			$('a[href="'+this._tab+'"').tab('show');
			console.log(top);
			$('html, body').animate({
	            scrollTop: top
	        }, 500);
			return false;
		}
	}
	goToTab.init();


	var connect = {
		init: function() {
			this._dom();
			this._bindEvent();
		},
		hide: function() {
			this._$target.hide();
		},
		_dom: function() {
			this._$el = $(".js-connector");
			this._$target = $(".js-connect");
		},
		_bindEvent: function() {
			this._$el.on("click", this._changePos.bind(this));
			this._$target.on("click", this._stopPropagation.bind(this));
		},
		_changePos: function(event) {
			var $el = $(event.currentTarget);
			var top = $el.position().top;
			var left = $el.position().left;
			var width = $(event.currentTarget).outerWidth();
			this._$target.css({
				left: +left+width,
				top: top
			}).show();
			event.stopPropagation();
		},
		_stopPropagation: function(event) {
			event.stopPropagation();
		}
	}
	connect.init();

	var resetForm = {
		init: function() {
			this._dom();
			this._bindEvent();
		},
		_dom: function() {
			this._$el = $(".js-btn-reset");
		},
		_bindEvent: function() {
			this._$el.on("click", this._action);
		},
		_action: function() {
			connect.hide();
		}
	}
	resetForm.init();

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

	var toggler = {
		init: function(option) {
			this._$el = $(".js-toggler");
			this._$root = $("body, html");
			this._bindEvent();
		},
		_bindEvent: function() {
			this._$el.on("click", this._selectTarget.bind(this));
		},
		_selectTarget: function(event) {
			var el = $(event.currentTarget);
			var target = $("."+el.data("toggle"));
			var rootClass = el.data("root");
			target.toggleClass("is-active");
			el.toggleClass("is-active");
			if (rootClass) {
				this._$root.toggleClass(rootClass);
			}
			event.stopPropagation();
		}
	}
	toggler.init();

	$('input[data-required="digits"]').on('keyup', function(){
		var value = $(this).val();
		var re = /[^0-9,]/;
		if (re.test(value)) {
			value = value.replace(re, '');
			$(this).val(value);
		}
	});

	var btnCart = {
		init: function(option) {
			this._$el = $(".js-btn-cart");
			this._$modal = $(".js-modal-cart");
			this._bindEvent();
		},
		_bindEvent: function() {
			this._$el.on("click", this._cartEvent.bind(this));
		},
		_cartEvent: function(event) {
			var el = $(event.currentTarget);
			var elText = el.data("text");
			el.text(elText);
			this._showModal();
			this._hideModal();
			event.stopPropagation();
		},
		_showModal: function() {
			this._$modal.addClass("is-active");
		},
		_hideModal: function() {
			var modal = this._$modal;
			if(modal.hasClass("is-active")) {
				setTimeout(function() {
					modal.removeClass("is-active");
				}, 5000);
			}
			
		}
	}
	btnCart.init();

	$(".js-subscribe button").on("click", function() {
		// send ajax request here
		// show message
		$(this).parents(".js-subscribe").addClass("is-success");
		return false;
	});

	$('#modal-login').on('show.bs.modal', function (e) {
		$("body").addClass("no-scroll").css( {
			marginRight: scrollWidth
		})
	});
	$('#modal-login').on('hide.bs.modal', function (e) {
		$("body").removeClass("no-scroll").css( {
			marginRight: 0
		})
	});

});