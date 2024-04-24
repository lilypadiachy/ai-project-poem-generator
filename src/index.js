function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "oa93db0bfe3c2f79ee43da0f374080at";
  let prompt = `Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a experienced poet with 20 years of experience studying and writing poetry. Your mission is to generate a 4 line poem in basic HTML format and seperate each line with a <br />. Do not include the word HTML in your poem.  Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class = "blink"> Generating a Poem for you about <strong>${instructionsInput.value}</strong></div>`;

  console.log("Generating Poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
