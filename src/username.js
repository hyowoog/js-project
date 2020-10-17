const form = document.querySelector(".js-form"),
	input = form.querySelector("input");
	label = document.querySelector('h4');

const USERNAME_LS = "user_name";

function handleSubmit(event){
	event.preventDefault();
	const name = input.value;
	input.value = '';
	localStorage.setItem(USERNAME_LS, name);
	console.log(name);
}

function getName(){
	const username = localStorage.getItem(USERNAME_LS);
	if (username === null){
		form.classList.remove('form');
		form.addEventListener("submit", handleSubmit);
	} else {
		label.innerText = `Hi~ ${username}`;
	}
}

function init() {
	getName();
	
}

init();