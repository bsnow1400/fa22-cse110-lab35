// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  synth.addEventListener('load', (event) => {

    const voiceSelect = document.getElementById("voice-select");
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length ; i++) 
    {
      const option = document.createElement('option');
      option.value = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) 
      {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  )
  
}

