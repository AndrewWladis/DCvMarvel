const loadingScreenText = document.getElementById('loadingScreenText');
loadingScreenText.innerText = 'Click To Start';
let textCount = 1;

document.onclick = function(){
    console.log('click event works');
    if (textCount == 1) {
        loadingScreenText.style.animation="fadeOut 1s";
        setTimeout(function(){ loadingScreenText.innerText = 'I am Brainiac'; }, 1000);
        textCount++;
    } else if (textCount == 2) {
        loadingScreenText.style.animation="fadeOut2 1s";
        setTimeout(function(){ loadingScreenText.innerText = 'There is a great danger approaching' }, 1000);
        textCount++
    } else if (textCount == 3) {
        loadingScreenText.style.animation="fadeOut 1s";
        setTimeout(function(){ loadingScreenText.innerText = 'I have gathered beings from each multiverse to battle' }, 1000);
        textCount++
    } else if (textCount == 4) {
        loadingScreenText.style.animation="fadeOut2 1s";
        setTimeout(function(){ loadingScreenText.innerText = 'The winner will become my personal defender' }, 1000);
        textCount++
    } else if (textCount == 5) {
        loadingScreenText.style.animation="fadeOut 1s";
        setTimeout(function(){ loadingScreenText.innerText = 'Good luck' }, 1000);
        textCount++
    } else if (textCount == 6) {
        window.location.replace("home.html");
        textCount++
    }
};