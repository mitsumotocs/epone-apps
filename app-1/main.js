import { Numpad } from "../libs/Numpad.js";

const textareaElement = document.querySelector('textarea');
textareaElement.addEventListener('keydown', (event) => {
    const text = event.target.value;
    switch (event.key) {
        case Numpad.KEY_STAR:
            event.preventDefault();
            event.target.value = text.substring(0, text.length - 1);
            break;
        case Numpad.KEY_SHARP:
            event.preventDefault();
            event.target.value = '';
            break;
        default:
            break;
    }
});