const body = document.querySelector("body");

const IMG_NUM = 3;

function handleImgLoad(){
	//body.appendChild()
}

function paintImg(imgNum){
	const img = new Image();
	img.src = `images/${imgNum+1}.jpg`;
	img.classList.add('bgImage');
	body.appendChild(img);
	//img.addEventListener("loadend", handleImgLoad);
}

function getRandom(){
	const number = Math.floor(Math.random()*IMG_NUM);
	return number;
}

function init(){	
	const randomNumber = getRandom();
	paintImg(randomNumber);
}

init();