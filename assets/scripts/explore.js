// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  let voices = [];
  /*
  window.speechSynthesis.onvoiceschanged = () => 
  {
    let voiceSelect = document.getElementById("voice-select");
    voices = window.speechSynthesis.getVoices();
    console.log();

  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
  }
  */
  
  let voiceSelect = document.getElementById("voice-select");
  voices = window.speechSynthesis.getVoices();
  
  for (let i = 0; i < voices.length ; i++) 
  {
    let option = document.createElement('option');
    option.value = `${voices[i].name} (${voices[i].lang})`;
  
    if (voices[i].default) 
    {
      option.textContent += ' — DEFAULT';
    }

    /*
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    */
    voiceSelect.appendChild(option);
    
  }
  
  
}

