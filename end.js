const endScreenText = document.getElementById('endScreenText');
endScreenText.innerText = 'Click To Start';
let textCount = 1;

document.onclick = function(){
    console.log('click event works');
    if (textCount == 1) {
        endScreenText.style.animation="fadeOut 1s";
        setTimeout(function(){ endScreenText.innerText = 'Thank you for your defense'; }, 1000);
        textCount++;
    } else if (textCount == 2) {
        endScreenText.style.animation="fadeOut2 1s";
        setTimeout(function(){ endScreenText.innerText = 'The End' }, 1000);
        textCount++
    } else if (textCount == 3) {
        endScreenText.style.animation="fadeOut 1s";
        setTimeout(function(){ endScreenText.innerText = 'Dedicated to my little brother Tyler' }, 1000);
        textCount++
    } else if (textCount == 4) {
        endScreenText.style.animation="fadeOut2 1s";
        setTimeout(function(){ endScreenText.innerText = 'Created By Andy Wladis' }, 1000);
        textCount++
    } else if (textCount == 5) {
        endScreenText.style.animation="fadeOut 1s";
        setTimeout(function(){ endScreenText.innerText = 'Inspired by the characters of DC and Marvel Comics' }, 1000);
        textCount++
    } else if (textCount == 6) {
        endScreenText.style.animation="fadeOut2 1s";
        setTimeout(function(){ endScreenText.innerText = 'A Ducky Games Project' }, 1000);
        textCount++
    } else if (textCount == 6) {
        endScreenText.style.animation="fadeOut2 1s";
        setTimeout(function(){ endScreenText.innerText = 'Coming soon...' }, 1000);
        setTimeout(function(){ window.location.replace("https://youtu.be/QTT5iHCHSn0"); }, 1500);
        textCount++
    }
};