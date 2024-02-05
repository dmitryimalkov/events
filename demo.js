let inputElement = document.querySelector("input");
let rest = 60;

function retriveUserInput() {
//  let enteredText = inputElement.value;
  rest = rest - 1;
  return rest;
}

inputElement.addEventListener("input", retriveUserInput);
