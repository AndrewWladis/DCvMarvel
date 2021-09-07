const mainHeader = document.getElementById('characterSelectText');
const dcBox = document.getElementById('characterPreviewDc');
const marvelBox = document.getElementById('characterPreviewMarvel');
const dcFighterPicture = document.getElementById('dcFighter');
const marvelFighterPicture = document.getElementById('marvelFighter');
let marvelispoweroff = false;
let dcispoweroff = false;
let aquamanIcon = document.getElementById('aquamanIcon');
let batmanIcon = document.getElementById('batmanIcon');
let flashIcon = document.getElementById('flashIcon');
let greenlanternIcon = document.getElementById('greenlanternIcon');
let nightwingIcon = document.getElementById('nightwingIcon');
let shazamIcon = document.getElementById('shazamIcon');
let superboyIcon = document.getElementById('superboyIcon');
let blackpantherIcon = document.getElementById('blackpantherIcon');
let captainamericaIcon = document.getElementById('captainamericaIcon');
let cyclopsIcon = document.getElementById('cyclopsIcon');
let daredevilIcon = document.getElementById('daredevilIcon');
let ghostriderIcon = document.getElementById('ghostriderIcon');
let mrfantasticIcon = document.getElementById('mrfantasticIcon');
let spidermanIcon = document.getElementById('spidermanIcon');
let currentDcFighter = 'base';
let currentMarvelFighter = 'base';
let isGameOver = true;
let dcBlocking = false;
let marvelBlocking = false;
let dcAttacking = false;
let marvelAttacking = false;
let dcHealth = 250;
let marvelHealth = 250;
const dcHealthBar = document.getElementById('dcHealth');
const marvelHealthBar = document.getElementById('marvelHealth');
let count = 0;
let playingAs = 'marvel';

window.onload = function() {
    let numA = Math.floor(Math.random() * 2);
    let numB = Math.floor(Math.random() * 7);
    console.log(numA)
    if (numA === 0) {
        playingAs = 'dc';
        mainHeader.innerText = 'You Are DC';
        console.log('dc-if statement works')
    } else if (numA === 1) {
        playingAs = 'marvel';
        mainHeader.innerText = 'You Are Marvel';
        console.log('marvel-if statement works')
    }

    if (playingAs === 'marvel') {
        if (numB === 0) {
            currentDcFighter = 'aquaman';
            dcFighterPicture.src = 'images/fighters/aquaman/basic.gif'
        } else if (numB === 1) {
            currentDcFighter = 'batman';
            dcFighterPicture.src = 'images/fighters/batman/basic.gif'
        } else if (numB === 2) {
            currentDcFighter = 'flash';
            dcFighterPicture.src = 'images/fighters/flash/basic.gif'
        } else if (numB === 3) {
            currentDcFighter = 'greenlantern';
            dcFighterPicture.src = 'images/fighters/greenlantern/basic.gif'
        } else if (numB === 4) {
            currentDcFighter = 'nightwing';
            dcFighterPicture.src = 'images/fighters/nightwing/basic.gif'
        } else if (numB === 5) {
            currentDcFighter = 'shazam';
            dcFighterPicture.src = 'images/fighters/shazam/basic.gif'
        } else if (numB === 5) {
            currentDcFighter = 'superboy';
            dcFighterPicture.src = 'images/fighters/superboy/basic.gif'
        }
    } else if (playingAs === 'dc') {
        if (numB === 0) {
            currentMarvelFighter = 'blackpanther';
            marvelFighterPicture.src = 'images/fighters/blackpanther/basic.gif'
        } else if (numB === 1) {
            currentMarvelFighter = 'captainamerica';
            marvelFighterPicture.src = 'images/fighters/captainamerica/basic.gif'
        } else if (numB === 2) {
            currentMarvelFighter = 'cyclops';
            marvelFighterPicture.src = 'images/fighters/cyclops/basic.gif'
        } else if (numB === 3) {
            currentMarvelFighter = 'daredevil';
            marvelFighterPicture.src = 'images/fighters/daredevil/basic.gif'
        } else if (numB === 4) {
            currentMarvelFighter = 'ghostrider';
            marvelFighterPicture.src = 'images/fighters/ghostrider/basic.gif'
        } else if (numB === 5) {
            currentMarvelFighter = 'mrfantastic';
            marvelFighterPicture.src = 'images/fighters/mrfantastic/basic.gif'
        } else if (numB === 6) {
            currentMarvelFighter = 'spiderman';
            marvelFighterPicture.src = 'images/fighters/spiderman/basic.gif'
        }
    }

if (playingAs === 'dc') {
    aquamanIcon.onclick = function(){
        currentDcFighter = 'aquaman';
        console.log(currentDcFighter)
        dcFighterPicture.src = 'images/fighters/aquaman/basic.gif'
    }
    
    batmanIcon.onclick = function(){
        currentDcFighter = 'batman';
        dcFighterPicture.src = 'images/fighters/batman/basic.gif'
    }
    
    flashIcon.onclick = function(){
        currentDcFighter = 'flash';
        dcFighterPicture.src = 'images/fighters/flash/basic.gif'
    }
    
    greenlanternIcon.onclick = function(){
        currentDcFighter = 'greenlantern';
        dcFighterPicture.src = 'images/fighters/greenlantern/basic.gif'
    }
    
    nightwingIcon.onclick = function(){
        currentDcFighter = 'nightwing';
        dcFighterPicture.src = 'images/fighters/nightwing/basic.gif'
    }
    
    shazamIcon.onclick = function(){
        currentDcFighter = 'shazam';
        dcFighterPicture.src = 'images/fighters/shazam/basic.gif'
    }
    
    superboyIcon.onclick = function(){
        currentDcFighter = 'superboy';
        dcFighterPicture.src = 'images/fighters/superboy/basic.gif'
    }
} else if (playingAs === 'marvel') {
    console.log('marvel if statement works')

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
        console.log('marvel onclick works')
    }
}

setTimeout(function(){ mainHeader.innerText = 'Press Space To Start' }, 4000);

document.onkeyup = function(e){
    if (e.keyCode == 32 && count == 0){
        mainHeader.innerText = 'Control DC With A & Z Keys';
        count++
    } else if (e.keyCode == 32 && count == 1){
        mainHeader.innerText = 'Control Marvel With K & M Keys';
        count++
    } else if (e.keyCode == 32 && count == 2){
        mainHeader.innerText = 'Start!';
        marvelBox.style.animation="fadeMarvel 1s";
        marvelpowerbutton.style.animation="powerbutton 1s";
        setTimeout(function(){ marvelBox.style.backgroundColor = 'rgb(31, 31, 31)'; marvelpowerbutton.style.opacity = '100'; }, 1000);
        dcBox.style.animation="fadeDC 1s";
        dcpowerbutton.style.animation="powerbutton 1s";
        setTimeout(function(){ dcBox.style.backgroundColor = 'rgb(31, 31, 31)'; dcpowerbutton.style.opacity = '100'; }, 1000);
        isGameOver = false;
        count++
    } else if (e.keyCode == 65 && isGameOver == false){
        dcFighterPicture.src = `images/fighters/${currentDcFighter}/attack.gif`
        console.log('dc attack works')
        dcAttacking = true;
        attack()
        setTimeout(function(){ dcFighterPicture.src = `images/fighters/${currentDcFighter}/basic.gif`; dcAttacking = false; }, 250);
    } else if (e.keyCode == 90 && isGameOver == false){
        dcFighterPicture.src = `images/fighters/${currentDcFighter}/block.gif`
        dcBlocking = true;
        setTimeout(function(){ dcFighterPicture.src = `images/fighters/${currentDcFighter}/basic.gif`; dcBlocking = false; }, 1000);
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
        marvelHealth -= 5;
        marvelHealthBar.innerText = marvelHealth;
    } else if (dcBlocking == false && marvelAttacking == true) {
        dcHealth -= 5;
        dcHealthBar.innerText = dcHealth;
    }

    if (dcHealth < 1) {
        isGameOver = true;
        mainHeader.innerText = 'Marvel Wins!';
        dcFighterPicture.src = 'images/blank.png';
        setTimeout(function(){ window.location.replace("marvelbossbattle.html"); }, 3000);
    } else if (marvelHealth < 1) {
        isGameOver = true;
        mainHeader.innerText = 'DC Wins!';
        marvelFighterPicture.src = 'images/blank.png';
        setTimeout(function(){ window.location.replace('dcbossbattle.html'); }, 3000)
    }
}
}