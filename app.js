const audioButton = document.querySelector('.aud-btton');
const audio = document.querySelector('#firetreasure');

audioButton.addEventListener('click', function(){
    audio.play();
})