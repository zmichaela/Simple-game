/*
ZADÁNÍ DÚ:
1) při změně směru změň obrázek panáčka;
2) když se srazí panáček s mincí, mince se přesune na jinou, náhodně vygenerovanou pozici (pozor na omezení šířky a výšky okna!)
3) vytvoř proměnnou, ve které se bude zvyšovat skóre po setkání panáčka a mince. Toto skóre se bude zobrazovat na stránce

BONUS) doplňte hru o zvuky :)
*/


let man = document.querySelector('#man');
let manX = 400;
let manY = 300;
let manHeight = man.height;
let manWidth = man.width; 
let coin = document.querySelector('#coin');
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
function placeMan(){
	man.style.left = manX + 'px';
	man.style.top = manY + 'px';
}
placeMan();


//Umistime minci na stranku
function umistiMinci() {
	mince.style.left = minceX + 'px';
	mince.style.top = minceY + 'px';	
}
umistiMinci();


//Zmena pozice mince - nahodne souradnice
function premistiMinci () {
	let newWidth = Math.floor(Math.random() * window.innerWidth);
	let newHeight = Math.floor(Math.random() * window.innerHeight);
	mince.style.left = newWidth + "px";
	mince.style.top = newHeight + "px";
}

// pocitadlo
function pocitadlo () {
    skoreCount += 1;
    scoreDiv.textContent = scoreCount;
    premistiMinci();
}


// Pohybujeme panackem
function movingKeyboard(udalost){
	let klavesa = udalost.key;
	if (klavesa === 'ArrowRight'){
        panacekX += 10;		
        panacek.src = "obrazky/panacek-vpravo.png";
		if (manX > window.innerWidth - manSirka){
			manX = window.innerWidth - manSirka;
		}
	} else if (klavesa === 'ArrowLeft'){
        manX -= 10;	
        man.src = "obrazky/panacek-vlevo.png";	
		if (manX < 0){
			manX = 0;
		}
	} else if (klavesa === 'ArrowUp'){
        manY = manY - 10;
        man.src = "obrazky/panacek-nahoru.png";
		if (manY < 0){
			manY = 0;
		}
	} else if (klavesa === 'ArrowDown'){
		manY += 10;	
        man.src = "obrazky/panacek.png";
		if (manY > window.innerHeight - manVyska){
			manY = window.innerHeight - manVyska;
		}
    } 
    placeMan();
    
	if (!(manX + manWidth < coinX || coinX + coinWidth < manX || 
	manY + manHeight < coinY || coinY + coinHeight < manY)) {
        coinSound.play();
        pocitadlo();
        if (skore === 5) {
          fanfara.play();  
          scoreDiv.textContent = "You won";
	} 
    music.play();
}
}

//bohuzel se mi to nepovedlo dotahnout uplne do konce, hra pokracuje po dosazeni peti bodu a mince trochu blbne tak prosim o radu