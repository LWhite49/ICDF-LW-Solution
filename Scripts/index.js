import {updateOutputs} from './elementObjects.js';

document.querySelector('.name-input').addEventListener("keyup", () => {
    updateOutputs();
});