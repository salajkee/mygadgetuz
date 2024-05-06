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
