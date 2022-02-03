import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);
// Swiper.use([Pagination]);
// Swiper.use([Autoplay]);

const slider = () => {
	const swiper = new Swiper('.swiper', {
		// Настройки слайдера
		loop: true,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	console.log('slider is loaded');
};

export default slider;
