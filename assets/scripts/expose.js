// expose.js

window.addEventListener('DOMContentLoaded', init);
  
const confetti = new JSConfetti();

/*
const volMute = 'assets/icons/volume-level-0.svg';
const volLow = 'assets/icons/volume-level-1.svg'; 
const volMed = 'assets/icons/volume-level-2.svg';
const volHigh = 'assets/icons/volume-level-3.svg';
*/

function init() {
  
  const horn = document.querySelector("select");
  const volume = document.getElementById('volume');
  const button = document.getElementsByTagName('button')[0];

  horn.addEventListener('change', (event) => {
    const image = document.getElementsByTagName('img')[0];
    image.src = `assets/images/${event.target.value}.svg`;
    const audio = document.getElementsByClassName('hidden')[0];
    audio.src = `assets/audio/${event.target.value}.mp3`;
  })
  
  volume.addEventListener('change', (event) => {
    const vol = event.target.value;
    const image = document.getElementsByTagName('img')[1];
    if(vol == 0){
      image.src = 'assets/icons/volume-level-0.svg';
    } else if(vol > 0 && vol < 33){
      image.src = 'assets/icons/volume-level-1.svg';
    } else if(vol >= 33 && vol < 67){
      image.src = 'assets/icons/volume-level-2.svg';
    } else{
      image.src = 'assets/icons/volume-level-3.svg';
    }
    const audio = document.getElementsByClassName('hidden')[0];
    audio.volume = vol/100;
  })
  
  button.addEventListener('click', (event) => {
    const getAudio = document.getElementsByClassName('hidden')[0];
    getAudio.play();
    if(horn.value == 'party-horn'){
      jsConfetti.addConfetti();
    }
  })
}
