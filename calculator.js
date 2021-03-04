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
        case "*":
            result = multiply(a, b);
            break; 
        case "/":
            result = divide(a, b);
            break; 
    }
    return result; 
}

console.log(operator("+", 12, 5));