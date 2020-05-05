let man = document.querySelector("#man");
let manX = 400;
let manY = 300;
let manHeight = man.height;
let manWidth = man.width; 
let coin = document.querySelector("#coin");
let coinX = 200;
let coinY = 250;
let coinHeight = coin.height;
let coinWidth = coin.width;


let score = document.querySelector("#score");
let scoreCount = 0;
let music = document.querySelector("#music");
let coinSound = document.querySelector("#coinsound");
let fanfara = document.querySelector("#fanfara");


//Place the man on the page
function placeMan() {
	man.style.left = manX + "px";
	man.style.top = manY + "px";
}
placeMan();


//Place the coin on the page
function placeCoin() {
	coin.style.left = coinX + "px";
	coin.style.top = coinY + "px";	
}
placeCoin();


//Change the coin position
function moveCoin () {
	let newWidth = Math.floor(Math.random() * window.innerWidth);
	let newHeight = Math.floor(Math.random() * window.innerHeight);
	coin.style.left = newWidth + "px";
	coin.style.top = newHeight + "px";
}


//Count score
function countScore () {	
	scoreCount += 1;
	score.textContent = scoreCount;
	if (scoreCount === 5) {
		fanfara.play();  
		return score.textContent = "You won this game. Well done!";
   }
}


// Moving the man
function movingKeyboard(event) {
	let keyboard = event.key;
	if (keyboard === 'ArrowRight'){
        manX += 10;		
        man.src = "images/panacek-vpravo.png";
		if (manX > window.innerWidth - manWidth){
			manX = window.innerWidth - manWidth;
		}
	} else if (keyboard === 'ArrowLeft') {
        manX -= 10;	
        man.src = "images/panacek-vlevo.png";	
		if (manX < 0){
			manX = 0;
		}
	} else if (keyboard === 'ArrowUp') {
        manY = manY - 10;
        man.src = "images/panacek-nahoru.png";
		if (manY < 0){
			manY = 0;
		}
	} else if (keyboard === 'ArrowDown') {
		manY += 10;	
        man.src = "images/panacek.png";
		if (manY > window.innerHeight - manHeight){
			manY = window.innerHeight - manHeight;
		}
    } 
    placeMan();
    
	if (!(manX + manWidth < coinX || coinX + coinWidth < manX || 
	manY + manHeight < coinY || coinY + coinHeight < manY)) {
        coinSound.play();
		countScore();
		moveCoin();
	} 
    music.play();
  }



