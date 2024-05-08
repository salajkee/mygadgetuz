// Hamburger menu
try {
	const header = document.querySelector('.header');
	const hamburger = document.querySelector('.hamburger');
	const headerLinks = document.querySelectorAll('.nav__link');
	const menu = document.querySelector('.header__menu');

	hamburger.addEventListener('click', () => {
		if (!header.classList.contains('header--active')) {
			header.classList.add('header--active');
			menu.style.height = `${menu.scrollHeight}px`;
		} else {
			header.classList.remove('header--active');
			menu.style.height = `0px`;
		}
	});

	headerLinks.forEach(link => {
		link.addEventListener('click', () => {
			if (header.classList.contains('header--active'))
				header.classList.remove('header--active');
		});
	});
} catch (e) {}

// Faq accordion
try {
	const faqTop = document.querySelectorAll('.faq__item-question');

	faqTop.forEach(item => {
		item.addEventListener('click', () => {
			const faqContent = item.nextElementSibling;
			if (!item.classList.contains('faq__item-question--active')) {
				item.classList.add('faq__item-question--active');
				faqContent.style.height = `${faqContent.scrollHeight}px`;
			} else {
				faqContent.style.height = `0px`;
				item.classList.remove('faq__item-question--active');
			}
		});
	});
} catch (e) {}

// Modal
try {
	const modalTrigger = document.querySelector('[data-modal-cb]');
	const modal = document.querySelector('.modal-cb');
	const modalClose = modal.querySelector('.modal__close');
	const modalBody = modal.querySelector('.modal__body');
	const modalContent = modal.querySelector('.modal__content');
	const modalThnks = modal.querySelector('.modal__thnks');

	modalTrigger.addEventListener('click', () => {
		let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
		document.body.classList.add('no-scroll');
		modal.classList.remove('hide');
		modal.classList.add('show');
		document.body.style.paddingRight = paddingOffset;
	});

	modalClose.addEventListener('click', () => {
		modal.classList.remove('show');
		modal.classList.add('hide');
		document.body.style.paddingRight = '0px';
		document.body.classList.remove('no-scroll');
	});
} catch (e) {}

try {
	const modalTrigger = document.querySelector('[data-modal-vd]');
	const modal = document.querySelector('.modal-vd');
	const modalClose = modal.querySelector('.modal__close');
	const iframe = modal.querySelector('#youtube-iframe');

	modalTrigger.addEventListener('click', () => {
		let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
		document.body.classList.add('no-scroll');
		modal.classList.remove('hide');
		modal.classList.add('show');
		document.body.style.paddingRight = paddingOffset;
	});

	modalClose.addEventListener('click', () => {
		modal.classList.remove('show');
		modal.classList.add('hide');
		document.body.style.paddingRight = '0px';
		document.body.classList.remove('no-scroll');
		iframe.contentWindow.postMessage(
			'{"event":"command","func":"stopVideo","args":""}',
			'*'
		);
	});
} catch (e) {}
