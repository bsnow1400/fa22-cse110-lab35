// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector('select');

  function populateVoiceList() 
  {
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
  }
  
  populateVoiceList();
  
  if (speechSynthesis.onvoiceschanged !== undefined) 
  {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  
}

