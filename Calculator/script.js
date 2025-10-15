const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        if (button.id === 'clear') {
            currentInput = '';
            display.value = '';
        } 
        else if (button.id === 'equal') {
            try {
                currentInput = eval(currentInput);
                display.value = currentInput;
            } catch {
                display.value = 'Error';
                currentInput = '';
            }
        } 
        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});
