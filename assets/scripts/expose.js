// expose.js

window.addEventListener('DOMContentLoaded', init);

const confetti = new JSConfetti();

function init() {

  const horn = document.querySelector('select');
  const volume = document.getElementById('volume');
  const button = document.getElementsByTagName('button')[0];
  
  horn.addEventListener('change', (event) => {
    const image = document.getElementsByTagName('img')[0];
    const audio = document.getElementsByClassName('hidden')[0];
    image.src = `assets/images/${event.target.value}.svg`;
    audio.src = `assets/audio/${event.target.value}.mp3`;
  })

  volume.addEventListener('change', (event) => {
    const audio = document.getElementsByClassName('hidden')[0];
    const vol = event.target.value;
    audio.volume = vol/100;
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
  })

  button.addEventListener('click', (event) => {
    const audio = document.getElementsByClassName('hidden')[0];
    audio.play();
    if(horn.value == 'party-horn'){
      confetti.addConfetti();
    }
  })
}
