const animate = function ({ timing, draw, duration }) {
	let start = performance.now();

	requestAnimationFrame(function animate(time) {
		// timeFraction изменяется от 0 до 1
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;

		// вычисление текущего состояния анимации
		let progress = timing(timeFraction);

		draw(progress); // отрисовать её

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}
	});
};

const appendStatusAnimation = function (element, status) {
	element.innerHTML = '';

	const animation = document.createElement('div');
	animation.className = 'loader';

	if (status === 'preload') {
		animation.innerHTML = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="24px" height="47px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
      <rect x="0" y="0" width="4" height="16" fill="#185490">
      <animateTransform attributeType="xml"
      attributeName="transform" type="translate"
      values="0 0; 0 20; 0 0"
      begin="0" dur="0.6s" repeatCount="indefinite" />
      </rect>
      <rect x="10" y="0" width="4" height="16" fill="#185490">
      <animateTransform attributeType="xml"
      attributeName="transform" type="translate"
      values="0 0; 0 20; 0 0"
      begin="0.2s" dur="0.6s" repeatCount="indefinite" />
      </rect>
      <rect x="20" y="0" width="4" height="16" fill="#185490">
      <animateTransform attributeType="xml"
      attributeName="transform" type="translate"
      values="0 0; 0 20; 0 0"
      begin="0.4s" dur="0.6s" repeatCount="indefinite" />
      </rect>
      </svg>`;
	}
	if (status === 'done') {
		animation.innerHTML = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" 
    stroke="#185490"  stroke-width="3" stroke-dasharray="100">
    <path id="check" d="M 12,22 L 22,31 L 36,13" 
       stroke-dashoffset="0">
    <animate attributeName="stroke-dashoffset" 
            from="100" to="0" dur="2s"></animate>
    </path>
    </svg>`;
	}
	if (status === 'error') {
		animation.innerHTML = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" 
    stroke="#185490" stroke-width="3" stroke-dasharray="100">
    <path id="fail" d="M 15,15 L 32,33 M 32,15 L 15,33" 
       stroke-dashoffset="0">
    <animate attributeName="stroke-dashoffset" 
            from="100" to="0" dur="2s">
    </animate>
    </path>
    </svg>`;
	}

	element.append(animation);
};

export { animate, appendStatusAnimation };
