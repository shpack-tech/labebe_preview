document.addEventListener('DOMContentLoaded', function () {
	var rewSwiper = new Swiper('.reviews_slider', {
		slidesPerView: 1.3,
		spaceBetween: 15,
		loop: true,
		draggable: true,
		navigation: {
			nextEl: '.r_p',
			prevEl: '.r_n',
		},
		pagination: {
			el: '.r_pag',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '"></span>';
			},
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 40,
			},
		},
	});

	var bestsellersSlider = new Swiper('.bestsellers_swiper', {
		slidesPerView: 1.3,
		spaceBetween: 15,
		loop: true,
		draggable: true,
		navigation: {
			nextEl: '.b_n',
			prevEl: '.b_p',
		},
		pagination: {
			el: '.b_pag',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '"></span>';
			},
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 1.5,
			},
			1200: {
				slidesPerView: 2.5,
			},
			// 1200: {
			// 	slidesPerView: 5,
			// 	spaceBetween: 20,
			// },
		},
	});

	var brandswiper = new Swiper('.manufacturer-swiper', {
		effect: 'cards',
		grabCursor: true,
		// loop: true,
		navigation: {
			nextEl: '.brand_back',
			prevEl: '.brand_forward',
		},
	});
	// function resizeSwiper() {
	// 	if (window.screen.width > 1200) {
	// 		document.querySelector('.desktop_slider_wrapp').classList.add('container');
	// 	} else {
	// 		document.querySelector('.desktop_slider_wrapp').classList.remove('container');
	// 	}
	// }
	// resizeSwiper();
	// document.addEventListener('resize', resizeSwiper);
});
