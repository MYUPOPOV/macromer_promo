const modals = () => {
	const footerContacts = document.querySelector('.footer-contacts');
	const popupAll = document.querySelectorAll('.popup');
	const mapPopup = document.querySelector('.map-popup');
	const popupCloseAll = document.querySelectorAll('.popup-close');

	const buttonFounder = document.getElementById('button-founder');
	const founderPopup = document.querySelector('.founder-popup');

	const buttonNtc = document.getElementById('button-ntc');
	const ntcPopup = document.querySelector('.ntc-popup');

	const buttonMovie = document.getElementById('button-movie');
	const moviePopup = document.querySelector('.movie-popup');
	const youtubeVideo = document.querySelector('.movie-popup-content-frame');

	const addVideo = () => {
		const videoIframe =
			' <iframe class="movie-popup-content-iframe" id="youtube-video" width="720" height="480" src="https://www.youtube.com/embed/dqfSRNoS_WM?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ';
		youtubeVideo.innerHTML = videoIframe;
	};

	const removeVideo = () => {};

	footerContacts.addEventListener('click', () => {
		mapPopup.style.display = 'flex';
	});

	buttonFounder.addEventListener('click', () => {
		founderPopup.style.display = 'flex';
	});

	buttonNtc.addEventListener('click', () => {
		ntcPopup.style.display = 'flex';
	});

	buttonMovie.addEventListener('click', () => {
		addVideo();
		moviePopup.style.display = 'flex';
	});

	popupCloseAll.forEach((popup) => {
		popup.addEventListener('click', () => {
			popupAll.forEach((item) => {
				item.style.display = 'none';
				youtubeVideo.innerHTML = '';
			});
		});
	});
};

export default modals;
