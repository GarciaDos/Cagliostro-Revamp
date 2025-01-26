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

window .addEventListener('load', function() {
    playButton.classList.add('paused');
});
const parallaxMouse = document.querySelector('.intro-cag');
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

document.addEventListener("mousemove", parallax);
function parallax(e) {
    document.querySelectorAll('.intro-cag').forEach(function(move){

        var moving_value = move.getAttribute("data-value");
        var x = e.clientX * moving_value /150;
        var y = e.clientY * moving_value /150;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}






