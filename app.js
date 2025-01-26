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



/* delete later */

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