
(function ($) {
	'use strict';

	/*-----------------------------
	=== ALL ESSENTIAL FUNCTIONS ===
	------------------------------*/
	// ===== 01. Main Menu
	function mianMenu() {
		// Variables
		var var_window = $(window),
			navContainer = $('.nav-container'),
			pushedWrap = $('.nav-pushed-item'),
			pushItem = $('.nav-push-item'),
			pushedHtml = pushItem.html(),
			pushBlank = '',
			navbarToggler = $('.navbar-toggler'),
			navMenu = $('.nav-menu'),
			navMenuLi = $('.nav-menu ul li'),
			closeIcon = $('.navbar-close');

		// navbar toggler
		navbarToggler.on('click', function () {
			navbarToggler.toggleClass('active');
			navMenu.toggleClass('menu-on');
		});

		// close icon
		closeIcon.on('click', function () {
			navMenu.removeClass('menu-on');
			navbarToggler.removeClass('active');
		});

		// adds toggle button to li items that have children
		navMenu.find('li a').each(function () {
			if ($(this).next().length > 0) {
				$(this)
					.parent('li')
					.append(
						'<span class="dd-trigger"><i class="fal fa-angle-down"></i></span>'
					);
			}
		});

		// expands the dropdown menu on each click
		navMenu.find('li .dd-trigger').on('click', function (e) {
			e.preventDefault();
			$(this)
				.parent('li')
				.children('ul')
				.stop(true, true)
				.slideToggle(350);
			$(this).parent('li').toggleClass('active');
		});

		// check browser width in real-time
		function breakpointCheck() {
			var windoWidth = window.innerWidth;
			if (windoWidth <= 991) {
				navContainer.addClass('breakpoint-on');
			} else {
				navContainer.removeClass('breakpoint-on');
			}

			if (windoWidth <= 767) {
				pushedWrap.html(pushedHtml);
				pushItem.hide();
			} else {
				pushedWrap.html(pushBlank);
				pushItem.show();
			}
		}

		breakpointCheck();
		var_window.on('resize', function () {
			breakpointCheck();
		});
	}

	// ===== 02. OffCanvasMenu
	function offcanvasMenu() {
		// Set Click Function For open
		$('.offcanvas-toggler').on('click', function (e) {
			e.preventDefault();
			$('.offcanvas-wrapper').addClass('show-offcanvas');
			$('.offcanvas-overly').addClass('show-overly');
		});
		// Set Click Function For Close
		$('.offcanvas-close').on('click', function (e) {
			e.preventDefault();
			$('.offcanvas-overly').removeClass('show-overly');
			$('.offcanvas-wrapper').removeClass('show-offcanvas');
		});
		// Set Click Function on Overly For open on
		$('.offcanvas-overly').on('click', function (e) {
			$(this).removeClass('show-overly');
			$('.offcanvas-wrapper').removeClass('show-offcanvas');
		});
	}

	// ===== 03. Banner Slider
	function bannerSlider() {
		var banner = $('#bannerSlider');
		var bannerFirst = $('.single-banner:first-child');

		banner.on('init', function (e, slick) {
			var firstAnimatingElements = bannerFirst.find(
				'[data-animation]'
			);
			slideanimate(firstAnimatingElements);
		});

		banner.on('beforeChange', function (
			e,
			slick,
			currentSlide,
			nextSlide
		) {
			var animatingElements = $(
				'div.slick-slide[data-slick-index="' + nextSlide + '"]'
			).find('[data-animation]');
			slideanimate(animatingElements);
		});

		banner.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			speed: 500,
			arrows: true,
			fade: false,
			dots: false,
			swipe: true,
			touchMove: true,
			adaptiveHeight: true,
			nextArrow: '<button class="slick-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
			prevArrow: '<button class="slick-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
			responsive: [{
				breakpoint: 768,
				settings: {
					arrows: false
				}
			}],
		});
	}

	function slideanimate(elements) {
		var animationEndEvents =
			'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var animationDelay = $this.data('delay');
			var animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': animationDelay,
				'-webkit-animation-delay': animationDelay,
			});
			$this
				.addClass(animationType)
				.one(animationEndEvents, function () {
					$this.removeClass(animationType);
				});
		});
	}

	// ===== 04. Bootstrap accordion
	function bootstrapAccordion() {
		$('.accordion').on('hide.bs.collapse show.bs.collapse', (e) => {
			$(e.target).prev().find('i').toggleClass('fa-chevron-up fa-chevron-down');
			$(e.target).prev().toggleClass('active-header');
		});
	}

	

	// ===== 20. Sticky Header
	function stickyHeader() {
		var sticky = $('header.sticky-header');
		var scrollFromtop = $(window).scrollTop();
		var scrollLimit = $('header').height() + 10;

		if (scrollFromtop < scrollLimit) {
			sticky.removeClass('sticky-on');
		} else {
			sticky.addClass('sticky-on');
		}
	}

	// ===== 21. Preloader and init Wow
	function preloader() {
		if ($('#preloader').length) {
			$('#preloader').delay(100).fadeOut(500);
		}
	}

	/*---------------------
	=== DOCUMENT READY  ===
	----------------------*/
	$(document).ready(function () {
		mianMenu()
		offcanvasMenu()
		bannerSlider()
		bootstrapAccordion()
		
	});

	/*--------------------
	=== WINDOW SCROLL  ===
	----------------------*/
	$(window).on('scroll', function () {
		stickyHeader()
	});

	/*------------------
	=== WINDOW LOAD  ===
	--------------------*/
	$(window).on('load', function () {
		preloader();
		// ===== 22. Wow Js 
		new WOW().init();
	});

})(jQuery);