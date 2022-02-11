const getClientData = () => {
	const clientDataPopup = document.querySelector('.client-data-popup');
	const clientDataPopupContent = document.querySelector('.client-data-popup-text-2');

	const getData = () => {
		return fetch('https://macropromo-19aa9-default-rtdb.europe-west1.firebasedatabase.app/db.json')
			.then((res) => res.json())
			.then((data) => {
				const array = Object.entries(data);
				clientDataPopupContent.innerHTML = ``;
				array.forEach((item) => {
					item.forEach((itemLocal, index) => {
						if (index === 1) {
							const str = `${itemLocal['client_date'].substr(0, 31)} | ${itemLocal['client_name']} | ${itemLocal['client_tel']} | ${itemLocal['client_email']} |  ${itemLocal['client_message']}`;
							console.log(str);

							const clientNote = document.createElement('h4');
							clientNote.classList.add('client-data-popup-text-2');
							clientNote.innerHTML = str;
							clientDataPopupContent.append(clientNote);
						}
					});
				});
			});
	};

	window.addEventListener('keydown', (e) => {
		if (e.keyCode === 121) {
			clientDataPopup.style.display = 'flex';
			getData();
		}
	});
};

export default getClientData;
