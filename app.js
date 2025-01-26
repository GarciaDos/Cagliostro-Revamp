function playAudio(){
    audio.play();
}

function pauseAudio(){
    audio.pause();
}

/* delete later */

function testfunc(){
    alert('you clicked this');
}

function iconChange(){
    document.getElementsByClassName
}

/* delete later */

const iconChangeOff = document.querySelector('#volumeIconOff');
const iconChangeOn = document.querySelector('#volumeIconOn')
const playButton = document.querySelector('.aud-btton');
const pauseButton = document.querySelector('.aud-btton');
const audio = document.querySelector('#firetreasure');

playButton.addEventListener('click', function(){
    if (audio.paused){
        playAudio();
    }

    else{

    pauseAudio();
}
});


/* delete later 


document.querySelector(".test1").addEventListener('click', function()){
    testfunc();
}


/* delete later */