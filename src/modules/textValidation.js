const textValidation = () => {
	/* Главная страница */
	const emailInput = document.querySelector('.feedback-first-email-input');
	const nameInput = document.querySelector('.feedback-first-name-input');
	const messageInput = document.querySelector('.feedback-second-message-input');

	/* Функция форматирования Полей ввода type=text и placeholder="Ваше имя"  */
	const textFormFormat = function () {
		this.addEventListener('input', (e) => {
			e.target.value = e.target.value.replace(/[^а-яА-Я- ]/, '');
		});
		this.addEventListener('blur', (e) => {
			e.target.value = e.target.value.replace(/[^а-яА-Я- ]+/, '');
			e.target.value = e.target.value.replace(/\s+/, ' ');
			e.target.value = e.target.value.replace(/^[-\s]+/, '');
			e.target.value = e.target.value.replace(/[-\s]+$/, '');
			// e.target.value = e.target.value[0].toUpperCase() + e.target.value.substr(1).toLowerCase();
		});
	};

	/* Функция форматирования Полей ввода type=text и placeholder="Ваше сообщение"  */
	const messageFormFormat = function () {
		this.addEventListener('input', (e) => {
			e.target.value = e.target.value.replace(/[^а-яА-Яa-zA-Z0-9\-@_"'«⠀».,;:!?~\*' ]/, '');
		});
		this.addEventListener('blur', (e) => {
			e.target.value = e.target.value.replace(/[^а-яА-Яa-zA-Z0-9\-@_"'«⠀».,;:!?~\*' ]+/, '');
			e.target.value = e.target.value.replace(/\s+/, ' ');
			e.target.value = e.target.value.replace(/^[-\s]+/, '');
			e.target.value = e.target.value.replace(/[-\s]+$/, '');
			// if (e.target.value) {
			// 	e.target.value = e.target.value[0].toUpperCase() + e.target.value.substr(1).toLowerCase();
			// }
		});
	};
	/* Функция форматирования Полей ввода type=email  */
	const emailFormFormat = function () {
		this.addEventListener('input', (e) => {
			e.target.value = e.target.value.replace(/[^a-zA-Z0-9\-@_.!~\*']/, '');
		});
		this.addEventListener('blur', (e) => {
			e.target.value = e.target.value.replace(/[^a-zA-Z0-9@\-_.!~\*']+/, '');
			e.target.value = e.target.value.replace(/\s+/, ' ');
			e.target.value = e.target.value.replace(/^[-\s]+/, '');
			e.target.value = e.target.value.replace(/[-\s]+$/, '');
		});
	};

	textFormFormat.bind(nameInput)();
	messageFormFormat.bind(messageInput)();
	emailFormFormat.bind(emailInput)();
};

export default textValidation;
