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
    "You are a experienced poet with 20 years of experience studying and writing poetry. Your mission is to generate a 4 line poem in basic HTML format and seperate each line with a <br />. Do not include the word HTML in your poem. At the end of the poem add the author of the poem in bold; SheCodes AI.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
