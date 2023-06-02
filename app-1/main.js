import { Numpad } from "../libs/Numpad.js";

const textareaElement = document.querySelector('textarea');
console.log(textareaElement);

textareaElement.addEventListener('input', (event) => {
    const text = event.target.value;
    //console.log(text);
});