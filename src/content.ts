console.log('Content script loaded');

document.addEventListener('click', (event) => {
	console.log('Click detected on :', event.target);
});
