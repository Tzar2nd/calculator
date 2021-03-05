const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operator = (operator, a, b) => {
    switch(operator) {
        case "+":
            result = add(a, b);
            break; 
        case "-":
            result = subtract(a, b);
            break; 
        case "x":
            result = multiply(a, b);
            break; 
        case "÷":
            result = divide(a, b);
            break; 
    }
    return result; 
}

// construct number
NUMBER_CONSTRUCT = "";
const concatNumber = (number) => { 

    if (ALTER == false) {
        return NUMBER_CONSTRUCT;
    }

    if (NUMBER_CONSTRUCT.length == 0) {
        NUMBER_CONSTRUCT = number;
    } else {
        NUMBER_CONSTRUCT = NUMBER_CONSTRUCT + number;
    }

    return NUMBER_CONSTRUCT;
}

ALTER = true; 
// add an operator to the formula
const concatOperator = (operator) => {
    if (!isNaN(NUMBER_CONSTRUCT)) {
        NUMBER_CONSTRUCT = NUMBER_CONSTRUCT + ' ' + operator + ' ';
        updateFormula(NUMBER_CONSTRUCT);
        ALTER = true; 
    }
}

function calculate() {
    string = document.getElementById("user-formula").textContent;

    numbers = string.split(" ");
    number1 = parseInt(numbers[0]);
    op = numbers[1];
    number2 = parseInt(numbers[2]);
    
    if (numbers.length == 3) {
        result = operator(op, number1, number2);
        NUMBER_CONSTRUCT = result.toString();
        ALTER = false;
        return result; 
    }

}

function resetCalculator() {
    ALTER = true;
    NUMBER_CONSTRUCT = "";
    document.getElementById('user-formula').textContent = "\u00A0";
}

function backSpace() {
    char = NUMBER_CONSTRUCT.substr(NUMBER_CONSTRUCT.length - 1);
    removeLen = 1;
    if (char == " ") removeLen = 3;  // remove all the operator including spaces
    if (NUMBER_CONSTRUCT.split(" ").length < 1) ALTER = true;

    NUMBER_CONSTRUCT = NUMBER_CONSTRUCT.substr(0, NUMBER_CONSTRUCT.length - removeLen);
    updateFormula(NUMBER_CONSTRUCT);
}

const updateFormula = number => document.getElementById('user-formula').textContent = number;
const updateResult= number => document.getElementById('user-result').textContent = number;

// number buttons
const numberButtons = Array.from(document.querySelectorAll('.number'));
numberButtons.forEach(button => 
    button.addEventListener('click', function() {
        updateFormula(concatNumber(button.textContent));
    }));

const operatorButtons = Array.from(document.querySelectorAll('.operator'));
operatorButtons.forEach(button => 
   button.addEventListener('click', () => concatOperator(button.textContent)));

const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', function() {
        updateFormula(calculate());
    });

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', function() {
        resetCalculator();
    });

const backspaceButton = document.querySelector('.backspace');
backspaceButton.addEventListener('click', function() {
        backSpace();
    });