// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  let voices = [];

  window.speechSynthesis.onvoiceschanged = () => 
  {
    let voiceSelect = document.getElementById("voice-select");
    voices = window.speechSynthesis.getVoices();

  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
  }
  /*
  const voiceSelect = document.getElementById("voice-select");
  voices = synth.getVoices();
  
  for (let i = 0; i < voices.length ; i++) 
  {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
    if (voices[i].default) 
    {
      option.textContent += ' — DEFAULT';
    }
  
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
  */
  
}

