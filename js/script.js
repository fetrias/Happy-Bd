const btn = document.querySelector('.button')

function hendleBtnClick(event) {
	event.preventDefault();
	let counteClickBtn = btn.textContent;
	btn.textContent = parseInt(counteClickBtn) + 1;

}


btn.addEventListener('click', hendleBtnClick);
