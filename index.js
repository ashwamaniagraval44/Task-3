let displayValue = '';
let memoryValue = 0;

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('result').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('result').value = displayValue;
}

function deleteLastCharacter() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('result').value = displayValue;
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        document.getElementById('result').value = displayValue;
    } catch (error) {
        displayValue = 'Error';
        document.getElementById('result').value = displayValue;
    }
}

function addToMemory() {
    memoryValue += parseFloat(displayValue) || 0;
}

function recallMemory() {
    displayValue = memoryValue.toString();
    document.getElementById('result').value = displayValue;
}

function clearMemory() {
    memoryValue = 0;
}
 
