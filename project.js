const bubbles = document.querySelectorAll('main > p');
const maxX = 55;
const maxY = 45;

bubbles.forEach((bubble, i) => {
	const y = Math.pow(i / bubbles.length, 0.5) * maxY * 2 - maxY;
	const x =
		Math.pow((maxX * i) / bubbles.length, 0.5) *
		5.5 *
		Math.random() *
		(i % 2 === 0 ? 1 : -1);

	bubble.style.setProperty('--a', `${x}vmin`);
	bubble.style.setProperty('--b', `${y}vmin`);
	bubble.style.setProperty('--c', Math.random() * 1.168661 + 0.025);
	bubble.style.setProperty('--hue', Math.random() * 360);

	bubble.animate(
		{
			opacity: [1, 0, 1, 0],
		},
		{
			duration: 2000 + Math.random() * 3000,
			iterations: Infinity,
			direction: 'alternate',
			delay: Math.random() * -16000,
			easing: 'ease-in-out',
		},
	);
});
