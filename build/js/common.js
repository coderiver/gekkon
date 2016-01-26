$(document).ready(function() {
	"use strict";
	$(document).on("click", function() {
		connect.hide();
		btnCart.hideBtnModal();
	});


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
			console.log(this._tab);
			var top = $('a[href="'+this._tab+'"]').offset().top;
			$('a[href="'+this._tab+'"').tab('show');
			$('a[href="'+this._tab+'"').collapse('show');
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
		_bindEvent: function() {
			this._$checkbox.on("change", this._changeStates.bind(this));
		},
		_changeStates: function(event) {
			var checkbox = $(event.currentTarget);
			var index = checkbox.parents(".slick-slide").data("slick-index");
			if(checkbox.is(":checked")) {
				checkbox.parents(this._parentClass).addClass("is-active");
				console.log(event.target);
				// goToSlide.init({
				// 	slider: ".js-slider-items",
				// 	slideIndex: index
				// });
			}
			else {
				checkbox.parents(this._parentClass).removeClass("is-active");
			}
		}
	}
	checkbox.init({
		parent: ".js-check",
		checkbox: ".js-checkbox"
	});

	var checkTarget = {
		init: function(option) {
			this._$el = $(".js-check-target");
			this._bindEvent();
		},
		_bindEvent: function() {
			this._$el.on("click", this._selectTarget.bind(this));
		},
		_selectTarget: function(event) {
			var el = $(event.target);
			var target = $('[data-target-name*="'+el.data("target")+'"]');
			var group = $('[data-target-name*="'+el.data("group-target")+'"]');
			var groupChecked = $('[data-target-name*="'+el.data("group-target")+'"]:checked');
			if (target.length) {
				target.trigger("click");
			}
			if (group.length) {
				if (el.hasClass("is-active")) {
					el.removeClass("is-active");
					groupChecked.prop('checked', false).parents(".js-check").removeClass("is-active");
				}
				else {
					el.addClass("is-active");
					group.prop('checked', true).parents(".js-check").addClass("is-active");
				}
			}
			event.stopPropagation();
		}
	}
	checkTarget.init();

	var goToSlide = {
		init: function(options) {
			this._$slider = $(options.slider);
			this._slideIndex = $(options.slideIndex);
			this._goTo();
		},
		_goTo: function () {
			this._$slider.slick("slickGoTo", this._slideIndex)
		}
	}


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
			this._$parent = $(".container");
			this._bindEvent();
		},
		hideBtnModal: function() {
			this._$modal.removeClass("is-active");
		},
		_bindEvent: function() {
			this._$el.on("click", this._cartEvent.bind(this));
			this._$modal.on("click", this._stopPropagation.bind(this));
		},
		_cartEvent: function(event) {
			var el = $(event.currentTarget);
			var elText = el.data("text");
			el.text(elText);
			this._showModal();
			event.stopPropagation();
		},
		_showModal: function() {
			this._$modal.addClass("is-active");
			setTimeout(this.hideBtnModal.bind(this), 2000)
			this._modalPosition();
		},
		_modalPosition: function () {
			var windowWidth = $(window).width();
			var width = +this._$parent.outerWidth();
			this._$modal.css({
				right: (windowWidth-width)/2
			})
		},
		_stopPropagation: function(event) {
			event.stopPropagation();
		}
	}
	btnCart.init();

	$(".js-subscribe button").on("click", function() {
		// send ajax request here
		// show message
		$(this).parents(".js-subscribe").addClass("is-success");
		return false;
	});

	//input file
	$('#file').on('change', function(e){
		$(this).siblings("span").text(e.target.files[0].name);
	});

	//mask
	$('[type="tel"]').mask("+7 (999) 999 - 99 - 99");

	$('.js-select-price').on('click', function(){
		$(this).find("ul").toggleClass('is-active');
	});

	function scrollbarWidth() {
		var block = $('<div>').css({'height':'50px','width':'50px'}),
			indicator = $('<div>').css({'height':'200px'});
			$('body').append(block.append(indicator));
		var w1 = $('div', block).innerWidth();
			block.css('overflow-y', 'scroll');
		var w2 = $('div', block).innerWidth();
			$(block).remove();
		return (w1 - w2);
	}

	$('.modal').on('show.bs.modal', function() {
		setTimeout(function() {
			$('.header__nav').css({
				"padding-right": document.body.style['padding-right'],
			});
		}, 0);
	});

	$('.modal').on('hidden.bs.modal', function() {
		$('.header__nav').css({
			"padding-right": "",
		});
	});

	var radioBox = {
        init: function() {
        	this.$el = $(".js-radio");
            this._bindEvent();
        },
        _bindEvent: function() {
            this.$el.on("change", this._checkState.bind(this))
        },
        _checkState: function(event) {
            var $el = $(event.target);
            var $targetToShow = $("."+$el.data("show"));
            var $targetToHide = $("."+$el.data("hide"));
            console.log("change")
            //if ($(event.target).is(":checked")) {
                $targetToShow.removeClass("is-hidden");
                $targetToHide.addClass("is-hidden");
            //}
            // else {
            //     $targetToShow.addClass("is-disabled");
            //     $targetToHide.addClass("is-disabled");
            // }
        }
    }
    radioBox.init();

    var concat = {
    	init: function() {
    		this.$el = $(".js-concat-btn");
    	    this._bindEvent();
    	},
    	_bindEvent: function() {
    	    this.$el.on("click", this._changeStates.bind(this))
    	},
    	_changeStates: function(event) {
    	    var el = $(event.currentTarget);
    	    var elTextVisible = el.data("text-visible");
    	    var elTextHidden = el.data("text-hidden");
    	    var parent = el.parents(".js-concat");
    	    if(!parent.hasClass("is-active")) {
    	    	parent.addClass("is-active");
    	    	el.text(elTextHidden)
    	    }
    	    else {
    	    	parent.removeClass("is-active");
    	    	el.text(elTextVisible);

    	    }
    	    event.stopPropagation();
    	}
    }
    concat.init();

});
