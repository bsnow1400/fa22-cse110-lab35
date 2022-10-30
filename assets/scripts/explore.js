// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  // SHIT JUST KEEPS RANDOMLY NOT WORKING EVEN WITH THE SAME CODE WHEN IT DOES WORK
  /*
  let voices = [];

  window.speechSynthesis.onvoiceschanged = () => 
  {
    let voiceSelect = document.getElementById("voice-select");
    voices = window.speechSynthesis.getVoices();

  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
  }
  */
  
  let voices = [];
  let inputText = document.querySelector("textarea");
  let voiceSelect = document.getElementById("voice-select");
  let speak = document.querySelector("button");
  let utterThis = new SpeechSynthesisUtterance();

  window.speechSynthesis.onvoiceschanged = () => 
  {
    voices = window.speechSynthesis.getVoices();

    for (let i = 0; i < voices.length ; i++) 
    {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      
      if (voices[i].default) 
      {
        option.textContent += ' — DEFAULT';
      }

      option.setAttribute('lang', voices[i].lang);
      option.setAttribute('name', voices[i].name);

      voiceSelect.appendChild(option); 
    }
  }
  
  speak.addEventListener("click", (event) => {
    utterThis.text = inputText.value;
    let selectedOption = voiceSelect.selectedOptions[0].getAttribute('name');

    for (let j = 0; j < voices.length; j++) 
    {
      if (voices[j].name === selectedOption) 
      {
        utterThis.voice = voices[j];
      }
    } 

    window.speechSynthesis.speak(utterThis);
  }
  )
  
}

