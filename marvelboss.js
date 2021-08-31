const mainHeader = document.getElementById('characterSelectText');
const dcBox = document.getElementById('characterPreviewDc');
const marvelBox = document.getElementById('characterPreviewMarvel');
const dcFighterPicture = document.getElementById('dcFighter');
const marvelFighterPicture = document.getElementById('marvelFighter');
let blackpantherIcon = document.getElementById('blackpantherIcon');
let captainamericaIcon = document.getElementById('captainamericaIcon');
let cyclopsIcon = document.getElementById('cyclopsIcon');
let daredevilIcon = document.getElementById('daredevilIcon');
let ghostriderIcon = document.getElementById('ghostriderIcon');
let mrfantasticIcon = document.getElementById('mrfantasticIcon');
let spidermanIcon = document.getElementById('spidermanIcon');
let currentDcFighter = 'darkseid';
let currentMarvelFighter = 'base';
let isGameOver = true;
let dcBlocking = false;
let marvelBlocking = false;
let dcAttacking = false;
let marvelAttacking = false;
let dcHealth = 550;
let marvelHealth = 300;
const dcHealthBar = document.getElementById('dcHealth');
const marvelHealthBar = document.getElementById('marvelHealth');
let count = 0;


blackpantherIcon.onclick = function(){
    currentMarvelFighter = 'blackpanther';
    marvelFighterPicture.src = 'images/fighters/blackpanther/basic.gif'
}

cyclopsIcon.onclick = function(){
    currentMarvelFighter = 'cyclops';
    marvelFighterPicture.src = 'images/fighters/cyclops/basic.gif'
}

captainamericaIcon.onclick = function(){
    currentMarvelFighter = 'captainamerica';
    marvelFighterPicture.src = 'images/fighters/captainamerica/basic.gif'
}

daredevilIcon.onclick = function(){
    currentMarvelFighter = 'daredevil';
    marvelFighterPicture.src = 'images/fighters/daredevil/basic.gif'
}

ghostriderIcon.onclick = function(){
    currentMarvelFighter = 'ghostrider';
    marvelFighterPicture.src = 'images/fighters/ghostrider/basic.gif'
}

mrfantasticIcon.onclick = function(){
    currentMarvelFighter = 'mrfantastic';
    marvelFighterPicture.src = 'images/fighters/mrfantastic/basic.gif'
}

spidermanIcon.onclick = function(){
    currentMarvelFighter = 'spiderman';
    marvelFighterPicture.src = 'images/fighters/spiderman/basic.gif'
}

setTimeout(function(){ mainHeader.innerText = 'Press Space To Start' }, 2000);

document.onkeyup = function(e){
    if (e.keyCode == 32 && count == 0){
        dcFighterPicture.src = 'images/boss/darkseidboomtube.gif'
        setTimeout(function(){ dcFighterPicture.src = 'images/boss/darkseid.gif'; }, 1500);
        count++
    } else if (e.keyCode == 32 && count == 1){
        mainHeader.innerText = 'Control Darkseid With A & Z Keys';
        count++
    } else if (e.keyCode == 32 && count == 2){
        mainHeader.innerText = 'Control Marvel With K & M Keys';
        count++
    } else if (e.keyCode == 32 && count == 3){
        mainHeader.innerText = 'Start!';
        marvelBox.style.animation="fadeMarvel 1s";
        setTimeout(function(){ marvelBox.style.backgroundColor = 'rgb(31, 31, 31)'; }, 1000);
        dcBox.style.animation="fadeDC 1s";
        setTimeout(function(){ dcBox.style.backgroundColor = 'rgb(31, 31, 31)'; }, 1000);
        isGameOver = false;
        count++
    } else if (e.keyCode == 65 && isGameOver == false){
        dcFighterPicture.src = 'images/boss/darkseidattack.gif'
        console.log('dc attack works')
        dcAttacking = true;
        attack()
        setTimeout(function(){ dcFighterPicture.src = 'images/boss/darkseid.gif'; dcAttacking = false; }, 1500);
    } else if (e.keyCode == 90 && isGameOver == false){
        dcFighterPicture.src = 'images/boss/darkseidblock.gif'
        dcBlocking = true;
        setTimeout(function(){ dcFighterPicture.src = 'images/boss/darkseid.gif'; dcBlocking = false; }, 1000);
    } else if (e.keyCode == 75 && isGameOver == false){
        marvelFighterPicture.src = `images/fighters/${currentMarvelFighter}/attack.gif`
        console.log('marvel attack works')
        marvelAttacking = true;
        attack()
        setTimeout(function(){ marvelFighterPicture.src = `images/fighters/${currentMarvelFighter}/basic.gif`; marvelAttacking = false; }, 250);
    } else if (e.keyCode == 77 && isGameOver == false){
        marvelFighterPicture.src = `images/fighters/${currentMarvelFighter}/block.gif`
        marvelBlocking = true;
        setTimeout(function(){ marvelFighterPicture.src = `images/fighters/${currentMarvelFighter}/basic.gif`; marvelBlocking = false; }, 1000);
    }
}

function attack() {
    if (marvelBlocking === false && dcAttacking === true) {
        marvelHealth -= 10;
        marvelHealthBar.innerText = marvelHealth;
    } else if (dcBlocking == false && marvelAttacking == true) {
        dcHealth -= 5;
        dcHealthBar.innerText = dcHealth;
    }

    if (dcHealth < 1) {
        isGameOver = true;
        mainHeader.innerText = 'Marvel Wins!';
        dcFighterPicture.src = 'images/blank.png';
        setTimeout(function(){ window.location.replace("end.html"); }, 1000);
    } else if (marvelHealth < 1) {
        isGameOver = true;
        mainHeader.innerText = 'DC Wins!';
        marvelFighterPicture.src = 'images/blank.png';
        setTimeout(function(){ window.location.replace("characterselect.html"); }, 500);
    }
}