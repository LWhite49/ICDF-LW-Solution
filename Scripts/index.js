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

/* Add keyup listener to each input field that runs updateOutputs function */
nameInputElem.addEventListener("keyup", () => {updateName(); });

numberInputElem.addEventListener("keyup", () => {
  updateNumber();
  if (event.key != "Backspace") {
  autoSpaceNumber(); }
  });

monthInputElem.addEventListener("keyup", () => {updateDate(); });

yearInputElem.addEventListener("keyup", () => {updateDate(); });

cvcInputElem.addEventListener("keyup", () => {updateCVC(); });

/* Add keydown listeners for number fields that prevent manual spaces using preventDefault */
numberInputElem.addEventListener("keydown", () => {
  if ((event.keyCode == 32 || isNaN(event.key)) && event.keyCode != 8)  { event.preventDefault(); }
  if ((numberInputElem.value.length == 4 || numberInputElem.value.length == 9 || numberInputElem.value.length == 14) && event.keyCode != 8) { event.preventDefault(); }
});

monthInputElem.addEventListener("keydown", () => {
  if ((event.keyCode == 32 || isNaN(event.key)) && event.keyCode != 8) { event.preventDefault(); }
});

yearInputElem.addEventListener("keydown", () => {
  if ((event.keyCode == 32 || isNaN(event.key)) && event.keyCode != 8) { event.preventDefault(); }
});

cvcInputElem.addEventListener("keydown", () => {
  if ((event.keyCode == 32 || isNaN(event.key)) && event.keyCode != 8) { event.preventDefault(); }
});


/* Create input validation functions for each field that will check for "bad" conditions, adding the error class to the input field and mapping hte relevant message to the output field
   If there is an error thrown, there will be an "error" returned, used to manage a boolean flag in the validateAll funciton */

const nameValidation = () => {
  /* If no bad conditions are present, clear error class and remove error message */
  if (nameInputElem.value.includes(' ') && nameInputElem.value.length != 0 && nameInputElem.value[0] != ' ' && nameInputElem.value[nameInputElem.value.length - 1] != ' ') {
    nameInputElem.classList.remove('error-highlight');
    document.querySelector('.name-error').innerHTML = "";
  }
  /* Check for bad conditions one by one */
  else if (nameInputElem.value[0] == ' ' || nameInputElem.value[nameInputElem.value.length - 1] == ' ') {
    nameInputElem.classList.add('error-highlight');
    document.querySelector('.name-error').innerHTML = "Cannot start or end with whitespace.";
  }
  else if (!nameInputElem.value.includes(' ') && nameInputElem.value.length != 0) {
    nameInputElem.classList.add('error-highlight');
    document.querySelector('.name-error').innerHTML = "Must include full name.";
  }
  else if (nameInputElem.value.length == 0) {
    nameInputElem.classList.add('error-highlight');
    document.querySelector('.name-error').innerHTML = "Field cannot be empty.";
  }
}

const numberValidation = () => {
  /* Use two Bool flags to see if */
}

/* Create a function that validates all fields, then checks to see if the next page can be loaded based on the application of error-highlight class */
const validateAll = () => {
  nameValidation();
  }

/* Add validateAll as an onclick listener to confirm button */
document.querySelector('.submit-button').addEventListener("click", () => {
  validateAll();
});