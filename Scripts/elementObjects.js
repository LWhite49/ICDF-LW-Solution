/* Export infoFields, an object of lists of relevant fields for each piece of info, where 0 is the input field, 1 is the current value, and 2 is the output field */
export const infoFields = {
    'name': [document.querySelector('.name-input'), document.querySelector('.name-input').value, document.querySelector('.name-output')],
    'number': [document.querySelector('.number-input'), document.querySelector('.number-input').value, document.querySelector('.number-output')],
    'month': [document.querySelector('.month-input'), document.querySelector('.month-input').value, document.querySelector('.date-output')],
    'year': [document.querySelector('.year-input'), document.querySelector('.year-input').value, document.querySelector('.date-output')],
    'cvc': [document.querySelector('.cvc-input'), document.querySelector('.cvc-input').value, document.querySelector('.cvc-output')]
};
/* Export keysList, a list of infoFields keys in order so it can be iterated */
export const keysList = ['name', 'number', 'month', 'year', 'cvc'];

export const updateOutputs = () => {
    /* Iterate infoFields, updating the information in output */
    for (let i=0; i<infoFields.length; i++) {
        if (i == 2 || i == 3) {
            continue;
        }
        let key = keysList[i];
        let userInput = infoFields[key][1];
        infoFields[key][2].innerHTML = userInput;
    }
    /* Ensure date and year inputs are working together */
    let dateString = infoFields['month'][1] + '/' + infoFields['year'][1];
    infoFields['year'][2].innerHTML = dateString;
}