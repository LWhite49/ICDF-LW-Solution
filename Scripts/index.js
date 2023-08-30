/* Pull each input and output field elements */
const nameInputElem = document.querySelector('.name-input');
const numberInputElem = document.querySelector('.number-input');
const monthInputElem = document.querySelector('.month-input');
const yearInputElem = document.querySelector('.year-input');
const cvcInputElem = document.querySelector('.cvc-input');
const nameOutputElem = document.querySelector('.name-output');
const numberOutputElem = document.querySelector('.number-output');
const dateOutputElem = document.querySelector('.date-output');
const cvcOutputElem = document.querySelector('.cvc-output');

/* Create a list of input fields for checking input validation */
const keysList = ['name', 'number', 'month', 'year', 'cvc'];

/* Define functions that source the user input and apply it to the output for each field */
const updateName = () => {
  nameOutputElem.innerHTML = nameInputElem.value;
  if (nameOutputElem.innerHTML.length == 0) {
    nameOutputElem.innerHTML = 'Jane Appleseed';
  }  
}

const updateNumber = () => {
  numberOutputElem.innerHTML = numberInputElem.value;
  if (numberOutputElem.innerHTML.length == 0) {
    numberOutputElem.innerHTML = '0000 0000 0000 0000';
  }
}

/* Define function that adds an auto space to every 4th number added to num input */
const autoSpaceNumber = () => {
  if (numberOutputElem.innerHTML.length == 4 || numberOutputElem.innerHTML.length == 9 || numberOutputElem.innerHTML.length == 14) {
    numberInputElem.value += ' ';
    updateNumber();
  }
}

const updateDate = () => {
  if (monthInputElem.value.length != 0 && yearInputElem.value.length != 0) {
    dateOutputElem.innerHTML = monthInputElem.value + '/' + yearInputElem.value;
  }
  else if (monthInputElem.value.length != 0 && yearInputElem.value.length == 0) {
    dateOutputElem.innerHTML = monthInputElem.value + '/' + '26';
  }
  else if (monthInputElem.value.length == 0 && yearInputElem.value.length != 0) {
    dateOutputElem.innerHTML = '08' + '/' + yearInputElem.value;
  }
  else {
    dateOutputElem.innerHTML = '08/26';
  }}

const updateCVC = () => {
  cvcOutputElem.innerHTML = cvcInputElem.value;
  if (cvcOutputElem.innerHTML.length == 0) {
    cvcOutputElem.innerHTML = '000';
  }
}


/* Add keydown listener to each input field that runs updateOutputs function */
document.querySelector('.name-input').addEventListener("keyup", () => {updateName(); });

document.querySelector('.number-input').addEventListener("keyup", () => {
  updateNumber();
  if (event.key != "Backspace") {
  autoSpaceNumber(); }
  });

document.querySelector('.month-input').addEventListener("keyup", () => {updateDate(); });

document.querySelector('.year-input').addEventListener("keyup", () => {updateDate(); });

document.querySelector('.cvc-input').addEventListener("keyup", () => {updateCVC(); });