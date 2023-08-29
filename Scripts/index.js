/* Pull each input and output field elements */
const nameInputElem = document.querySelector('.name-input');
const numberInputElem = document.querySelector('.number-input');
const monthInputElem = document.querySelector('.number-input');
const yearInputElem = document.querySelector('.year-input');
const cvcInputElem = document.querySelector('.cvc-input');
const nameOutputElem = document.querySelector('.name-output');
const numberOutputElem = document.querySelector('.number-output');
const dateOutputElem = document.querySelector('.date-output');
const cvcOutputElem = document.querySelector('.cvc-output');

/* Create a list of input fields for checking input validation */
const keysList = ['name', 'number', 'month', 'year', 'cvc'];

/* Define functions that source the user input and apply it to the output for each field */
  export const updateName = () => {
    nameOutputElem.innerHTML = nameInputElem.value;
    if (nameOutputElem.innerHTML.length == 0) {
        nameOutputElem.innerHTML = '--------';
    }  
}

/* Add keydown listener to each input field that runs updateOutputs function */
document.querySelector('.name-input').addEventListener("keyup", () => { updateName(); });