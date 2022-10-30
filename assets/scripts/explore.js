// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  /*
  window.speechSynthesis.onvoiceschanged = () => 
  {
    let voiceSelect = document.getElementById("voice-select");
    voices = window.speechSynthesis.getVoices();
    console.log();

  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
  }
  */
  
  let voices = [];
  let inputText = document.getElementById("text-to-speech");
  let voiceSelect = document.getElementById("voice-select");
  let speak = document.querySelector("button");

  voices = window.speechSynthesis.getVoices();
  
  for (let i = 0; i < voices.length ; i++) 
  {
    let option = document.createElement('option');
    option.value = `${voices[i].name} (${voices[i].lang})`;
  
    
    if (voices[i].default) 
    {
      option.value += ' — DEFAULT';
    }

    option.setAttribute('lang', voices[i].lang);
    option.setAttribute('name', voices[i].name);

    voiceSelect.options.appendChild(option);
    
  }
  /*
  speak.addEventListener('click', (event) => 
  {
    event.preventDefault();

    let utterThis = new SpeechSynthesisUtterance(inputText.getAttribute("placeholder"));
    let selectedOption = voiceSelect.selectedOptions[0].getAttribute('name');

    for (let j = 0; j < voices.length; j++) 
    {
      if (voices[j].name === selectedOption) 
      {
        utterThis.voice = voices[j];
      }
    }

    synth.speak(utterThis);
  }
  */
}

