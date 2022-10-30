// expose.js

window.addEventListener('DOMContentLoaded', init);

const jsConfetti = new JSConfetti();

function init() {

  const horn = document.querySelector('select');
  horn.addEventListener('change', (event) => {
    const image = document.getElementsByTagName('img')[0];
    image.src = `assets/images/${event.target.value}.svg`;
    const audio = document.getElementsByClassName('hidden')[0];
    audio.src = `assets/audio/${event.target.value}.mp3`;
  })

  const volume = document.getElementById('volume');
  volume.addEventListener('change', (event) => {
    const vol = event.target.value;
    const image = document.getElementsByTagName('img')[1];
    if(vol == 0){
      image.src = 'assets/icons/volume-level-0.svg'
    } else if(vol < 33){
      image.src = 'assets/icons/volume-level-1.svg'
    } else if(vol > 33 && vol < 67){
      image.src = 'assets/icons/volume-level-2.svg'
    } else{
      image.src = 'assets/icons/volume-level-3.svg'
    }
    const audio = document.getElementsByClassName('hidden')[0];
    audio.volume = vol/100;
  })

  const button = document.getElementsByTagName('button')[0];
  button.addEventListener('click', (event) => {
    const getAudio = document.getElementsByClassName('hidden')[0];
    getAudio.play();
    if(horn.value == 'party-horn'){
      jsConfetti.addConfetti();
    }
  })
}
