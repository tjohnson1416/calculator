let num1 = 0;
let num2 = 0;
let operator = undefined;

function add(a, b) {
    return (a + b);
};

function subtract(a, b) {
    return (a - b);
};

function multiply(a, b) {
    return (a * b);
};

function divide(a, b) {
    return (a / b);
};

function operate(op, a, b){
    //1 is +, 2 is -, 3 is *, 4 is /
    if (op == 1){
        return add(a, b);
    }
    if (op == 2){
        return subtract(a, b);
    }
    if (op == 3){
        return multiply(a, b);
    }
    if (op == 4){
        return divide(a, b);
    }
};