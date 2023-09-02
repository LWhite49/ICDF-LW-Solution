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

const updateDate = () => {
  /* If both date and year fields have input... */
  if (monthInputElem.value.length != 0 && yearInputElem.value.length != 0) {
    dateOutputElem.innerHTML = monthInputElem.value + '/' + yearInputElem.value;
  }
  /* If only month field has input... */
  else if (monthInputElem.value.length != 0 && yearInputElem.value.length == 0) {
    dateOutputElem.innerHTML = monthInputElem.value + '/' + '26';
  }
  /* If only year field has input... */
  else if (monthInputElem.value.length == 0 && yearInputElem.value.length != 0) {
    dateOutputElem.innerHTML = '08' + '/' + yearInputElem.value;
  }
  /* If neither field has input... */
  else {
    dateOutputElem.innerHTML = '08/26';
  }}

const updateCVC = () => {
  cvcOutputElem.innerHTML = cvcInputElem.value;
  if (cvcOutputElem.innerHTML.length == 0) {
    cvcOutputElem.innerHTML = '000';
  }
}

/* Define function that adds an auto space to every 4th number added to num input */
const autoSpaceNumber = () => {
  if (numberOutputElem.innerHTML.length == 4 || numberOutputElem.innerHTML.length == 9 || numberOutputElem.innerHTML.length == 14) {
    numberInputElem.value += ' ';
    updateNumber();
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

/* Add keydown listeners for number fields that use preventDefault */
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
  /* If there are no bad conditions */
  if (numberInputElem.value.length == 19) {
    numberInputElem.classList.remove("error-highlight");
    document.querySelector(".number-error").innerHTML = '';
  }
  /* If the card number is too short */
  else if (numberInputElem.value.length < 19) {
    numberInputElem.classList.add("error-highlight");
    document.querySelector(".number-error").innerHTML = 'Must include all 16 digits.';
  }
}

const dateValidation = () => {

  /* Pull current year for comparison */
  const currentYear = new Date().getFullYear()
  /* If there are no bad month conditions */
  if (monthInputElem.value.length == 2 && 0 < parseInt(monthInputElem.value, 10) < 13) {
    monthInputElem.classList.remove("error-highlight");
    document.querySelector(".date-error").innerHTML = '';
  }
  /* if there are no bad year conditions */
  if (yearInputElem.value.length == 2 && parseInt(yearInputElem.value, 10) >= parseInt(currentYear % 100, 10)) {
    yearInputElem.classList.remove("error-highlight");
    document.querySelector(".date-error").innerHTML = '';
  }

  /* If length of month is too short */
  if (monthInputElem.value.length < 2) {
    monthInputElem.classList.add("error-highlight");
    document.querySelector(".date-error").innerHTML = 'Month must be in form MM.';
  }
  /* If month is in wrong range */
  else if ( parseInt(monthInputElem.value, 10) < 1 || parseInt(monthInputElem.value, 10) > 12 ) {
    monthInputElem.classList.add("error-highlight");
    document.querySelector(".date-error").innerHTML = 'Month must be between 01-12.';
  }

  /* If length of year is too short */
  if (yearInputElem.value.length < 2) {
    yearInputElem.classList.add("error-highlight");
    document.querySelector(".date-error").innerHTML = 'Year must be in form YY.';
  }
  /* If year is expired already */
  else if (parseInt(yearInputElem.value, 10) < parseInt(currentYear % 100, 10)) {
    yearInputElem.classList.add("error-highlight");
    document.querySelector(".date-error").innerHTML = 'Card expired last year.';
  }
}

const cvcValidation = () => {
  if (cvcInputElem.value.length == 3) {
    cvcInputElem.classList.remove("error-highlight");
    document.querySelector(".cvc-error").innerHTML = '';
  }
  else if (cvcInputElem.value.length < 3) {
    cvcInputElem.classList.add("error-highlight");
    document.querySelector(".cvc-error").innerHTML = 'CVC must include all 3 digits.';
  }
}

/* Create a function that validates all fields, then checks to see if the next page can be loaded based on the application of error-highlight class */
const validateAll = () => {
  nameValidation();
  numberValidation();
  dateValidation();
  cvcValidation();
  }

/* Add validateAll as an onclick listener to confirm button */
document.querySelector('.submit-button').addEventListener("click", () => {
  validateAll();
  /* If the error-highlight class is applied to NO input field, change the innerHTML of form-wrap to completed state */
  if (nameInputElem.classList.contains("error-highlight") || numberInputElem.classList.contains("error-highlight") || monthInputElem.classList.contains("error-highlight") || 
  yearInputElem.classList.contains("error-highlight") || cvcInputElem.classList.contains("error-highlight")) {
    console.log("Cannot complete.");
  }
  else {
    document.querySelector('.form-wrap').innerHTML = `
    <div class="button-wrap">
      <button class="submit-button">Confirm</button>
    </div>`;
  }
});