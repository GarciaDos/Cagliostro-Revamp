function playAudio(){
    audio.play();
}

function pauseAudio(){
    audio.pause();
}

/*function pauseOverlay(){
    document.querySelector('.aud-btton').style["backgroundColor"] = "rgb(46, 52, 97)";
}

function resumeOverlay(){
    document.querySelector('.aud-btton').style["backgroundColor"] = "transparent";
}
*/
function pauseOverlay(){
playButton.classList.toggle('paused');
}
const playButton = document.querySelector('.aud-btton');
const pauseButton = document.querySelector('.aud-btton');
const audio = document.querySelector('#firetreasure');

playButton.addEventListener('click', function(){
    if (audio.paused){
        playAudio();
        pauseOverlay();
    }

    else{

    pauseAudio();
    pauseOverlay();
}
});




