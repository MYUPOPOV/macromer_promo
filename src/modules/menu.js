const menu = () => {
	const menuBtn = document.querySelector('.burger-menu');
	const menu = document.querySelector('.menu');
	const footerUp = document.querySelector('.footer-up');
	const iconTextMacromer = document.querySelector('.icon-text-macromer');

	const scrollUp = function (object) {
		object.scrollIntoView({ block: 'start', behavior: 'smooth' });
	};

	const toggleMenu = () => {
		if (!menu.classList.contains('active-menu')) {
			menu.classList.add('active-menu');
		} else {
			menu.classList.remove('active-menu');
		}
	};

	menuBtn.addEventListener('click', () => {
		toggleMenu();
	});

	menu.addEventListener('click', (e) => {
		if (e.target.classList.contains('close-btn')) {
			e.preventDefault();
			toggleMenu();
		}
		if (e.target.classList.contains('menu-link')) {
			e.preventDefault();
			toggleMenu();
			console.log(e.target.getAttribute('href'));
			const itemLink = document.getElementById(e.target.getAttribute('href').substring(1));
			scrollUp.bind(itemLink)(itemLink);
		}
	});

	footerUp.addEventListener('click', (e) => {
		const headerMenu = document.getElementById('header-menu');
		scrollUp.bind(headerMenu)(headerMenu);
	});

	iconTextMacromer.addEventListener('click', () => {
		window.open('https://macromer.ru/', '_blank');
	});
};

export default menu;
