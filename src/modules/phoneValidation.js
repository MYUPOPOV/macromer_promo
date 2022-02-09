const phoneValidation = () => {
	const namePhone = document.querySelectorAll('[name="client_tel"]');

	function phoneMask(element, mask = '+7 (___) ___-__-__') {
		function masking(event) {
			const keyCode = event.keyCode;
			const def = mask.replace(/\D/g, '');
			const value = this.value.replace(/\D/g, '');
			let i = 0;
			let newValue = mask.replace(/[_\d]/g, (a) => (i < value.length ? value.charAt(i++) || def.charAt(i) : a));
			i = newValue.indexOf('_');
			if (i !== -1) {
				newValue = newValue.slice(0, i);
			}
			let regexp = mask
				.substring(0, this.value.length)
				.replace(/_+/g, (a) => '\\d{1,' + a.length + '}')
				.replace(/[+()]/g, '\\$&');
			regexp = new RegExp('^' + regexp + '$');
			if (!regexp.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58)) {
				this.value = newValue;
			}
			if (event.type === 'blur' && this.value.length < 5) {
				this.value = '';
			}
		}
		element.addEventListener('input', masking);
		element.addEventListener('focus', masking);
		element.addEventListener('blur', masking);
	}

	namePhone.forEach((item) => {
		// console.log('~ item', item);
		phoneMask(item);
	});
};

export default phoneValidation;
