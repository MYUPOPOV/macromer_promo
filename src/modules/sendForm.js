import { appendStatusAnimation } from './helpers';

const sendForm = () => {
	const feedbackForm = document.getElementById('feedback');
	const statusFormPopup = document.querySelector('.status-form-popup');
	const feedbackButton = document.querySelector('.feedback-button');
	let statusBlock = document.createElement('div');
	const statusFormPopupText = document.querySelector('.status-form-popup-content');

	/* Валидация форм перед отправкой */
	const validate = (list) => {
		let success = true;
		list.forEach((input) => {
			if (
				(input.name === 'client_tel' && /^[\d+() +-]+$/.test(input.value) && input.value.length > 10) ||
				(input.name === 'client_email' && /^[a-zA-Z0-9@-_.! ]+$/.test(input.value) && input.value.length > 1) ||
				(input.name === 'client_name' && /^[а-яА-Яa-zA-Z- ]+$/.test(input.value) && input.value.length > 1) ||
				(input.name === 'client_message' && /^[а-яА-Яa-zA-Z0-9\-.,;:!? ]+$/.test(input.value) && input.value.length > 1)
			) {
				input.classList.add('success');
				input.classList.remove('error');
			} else {
				input.classList.add('error');
				input.classList.remove('success');
			}
		});
		list.forEach((input) => {
			if (input.classList.contains('error')) {
				success = false;
			}
		});
		return success;
	};

	/* Очистка форм после отправки */
	const resetInputs = (list) => {
		list.forEach((input) => {
			input.value = '';
		});
	};

	const showStatusModal = (status) => {
		const modalText1 = document.querySelector('.status-form-popup-text-1');
		const modalText2 = document.querySelector('.status-form-popup-text-2');
		statusFormPopup.style.display = 'flex';
		if (status === 'checkForms') {
			modalText1.textContent = 'Ошибка';
			modalText2.textContent = 'Проверьте правильность заполнения форм!';
		}
		if (status === 'success') {
			modalText1.textContent = 'Спасибо!';
			modalText2.textContent = 'Наш специалист с вами свяжется.';
		}
		if (status === 'error') {
			modalText1.textContent = 'Ошибка';
			modalText2.textContent = 'Что-то пошло не так...';
		}
		if (status === 'preload') {
			modalText1.textContent = 'Загрузка';
			modalText2.textContent = 'Ваш запрос отправляется';
		}
	};

	/* Отправка формы */
	const sendData = (body) => {
		return fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});
	};
	const submitForm = () => {
		const formElements = feedbackForm.querySelectorAll('input');
		const formData = new FormData(feedbackForm);
		const formBody = {};

		appendStatusAnimation(statusBlock, 'preload');
		statusFormPopupText.append(statusBlock);
		showStatusModal('preload');

		formData.forEach((val, key) => {
			formBody[key] = val;
		});

		if (validate(formElements)) {
			sendData(formBody)
				.then((response) => {
					if (response.status !== 201) {
						showStatusModal('error');
						throw new Error('Что то пошло не так');
					}
					return response.json();
				})
				.then((data) => {
					appendStatusAnimation(statusBlock, 'done');
					// setTimeout(() => {
					// 	statusBlock.innerHTML = '';
					// 	modal.style.display = 'none';
					// }, 1000);
					resetInputs(formElements);
					// alert('Спасибо! Наш специалист с вами свяжется!');
					showStatusModal('success');
				})
				.catch((error) => {
					appendStatusAnimation(statusBlock, 'error');
					setTimeout(() => {
						statusBlock.innerHTML = '';
						modal.style.display = 'none';
					}, 2000);
				});
		} else {
			// alert('Проверьте правильность заполнения форм!');
			appendStatusAnimation(statusBlock, 'error');
			// setTimeout(() => {
			// 	statusBlock.innerHTML = '';
			// 	modal.style.display = 'none';
			// }, 2000);
			showStatusModal('checkForms');
		}
	};

	feedbackForm.addEventListener('submit', (e) => {
		e.preventDefault();
		submitForm();
	});
};

export default sendForm;
