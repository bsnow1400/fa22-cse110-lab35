// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const synth = window.speechSynthesis
  const voices = document.querySelector("select");

  function buildVoices()
  {
    let voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++)
    {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default)
      {
        option.textContent += ' -- DEFAULT';
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voices.appendChild(option);
    }
  }

  buildVoices();

}