function getInput(inputId) {
  const inputArray = document
    .getElementById(inputId)
    .value.split(",")
    .map((input) => input.trim());
  return inputArray;
}

function getCleanWater(waterInput, filterInput) {
  return waterInput.filter((value) => !filterInput.includes(value));
}

function filterWater() {
  const waterInput = getInput("waterInput");
  const filterInput = getInput("filter");
  const cleanWater = getCleanWater(waterInput, filterInput);
  console.log(cleanWater);

  const output = document.getElementById("filter-out");
  output.textContent = "";
  const cleanWaterOutput = document.createElement("p");
  cleanWaterOutput.textContent = cleanWater.join(", ");
  output.appendChild(cleanWaterOutput);
}
