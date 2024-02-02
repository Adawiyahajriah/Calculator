let display = document.getElementById('display');
let currentInput = '';

function appendValue(value) {
    currentInput += value;
    updateDisplay();
}

function appendOperator(operator) {
    currentInput += ` ${operator} `;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        updateDisplay();
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput;
}
