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


let scoreDiv = document.querySelector("#score");
let music = document.querySelector("#music");
let coinSound = document.querySelector("#coinsound");
let fanfara = document.querySelector("#fanfara");
let scoreCount = 0;

//Umistime panacka na stranku
function placeMan() {
	man.style.left = manX + "px";
	man.style.top = manY + "px";
}
placeMan();


//Umistime minci na stranku
function placeCoin() {
	coin.style.left = coinX + "px";
	coin.style.top = coinY + "px";	
}
placeCoin();


//Zmena pozice mince - nahodne souradnice
function moveCoin () {
	let newWidth = Math.floor(Math.random() * window.innerWidth);
	let newHeight = Math.floor(Math.random() * window.innerHeight);
	coin.style.left = newWidth + "px";
	coin.style.top = newHeight + "px";
}

// pocitadlo
function pocitadlo () {
    scoreCount += 1;
    scoreDiv.textContent = scoreCount;
    moveCoin();
}


// Pohybujeme panackem
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
        pocitadlo();
        if (score === 5) {
          fanfara.play();  
          scoreDiv.textContent = "You won this game. Well done!";
	} 
    music.play();
  }
}
/*
ZADÁNÍ DÚ:
1) při změně směru změň obrázek panáčka;
2) když se srazí panáček s mincí, mince se přesune na jinou, náhodně vygenerovanou pozici (pozor na omezení šířky a výšky okna!)
3) vytvoř proměnnou, ve které se bude zvyšovat skóre po setkání panáčka a mince. Toto skóre se bude zobrazovat na stránce

BONUS) doplňte hru o zvuky :)
*/