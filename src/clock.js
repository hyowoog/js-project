
const clock = document.querySelector('.clock');


function getTime(){
	const dt = new Date;
	const hour = dt.getHours();
	const min = dt.getMinutes();
	const sec = dt.getSeconds();
	
	const time = `${hour < 10 ? `0${hour}` : hour} : ${min < 10 ? `0${min}` : min} : ${sec < 10 ? `0${sec}` : sec}`;
	clock.innerText = time;
}

function init(){
	getTime();
	setInterval(getTime, 1000);
}

init();