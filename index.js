const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

navLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const href = link.getAttribute('href');
		const section = document.querySelector(href);
		section.scrollIntoView({
			behavior: 'smooth',
			duration: 1
		});
	});
});

sections.forEach((section) => {
	section.addEventListener('wheel', (e) => {
		e.preventDefault();
		const delta = e.wheelDelta || -e.deltaY || -e.detail;
		if (delta < 0) {
			const nextSection = section.nextElementSibling;
			if (nextSection) {
				nextSection.scrollIntoView({
					behavior: 'smooth',
					duration: 1
				});
			}
		} else if (delta > 0) {
			const prevSection = section.previousElementSibling;
			if (prevSection) {
				prevSection.scrollIntoView({
					behavior: 'smooth',
					duration: 1
				});
			}
		}
	});
});
