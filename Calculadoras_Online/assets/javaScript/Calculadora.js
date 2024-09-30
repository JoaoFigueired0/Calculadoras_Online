let currentNumber = '';
let operator = '';
let previousNumber = '';

function appendNumber(number) {
    currentNumber += number;
    document.getElementById('display').value = currentNumber;
}

function somar(number) {
    document.getElementById('display').value * number
}

function subtrair(number) {
    document.getElementById('display').value * number
}

function dividir(number) {
    document.getElementById('display').value * number
}

function multipicar(number) {
    document.getElementById('display').value * number
}




function appendOperator(op) {
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}







function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    document.getElementById('display').value = '';
}