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
    if (op == '+'){
        return add(a, b);
    }
    if (op == '-'){
        return subtract(a, b);
    }
    if (op == '*'){
        return multiply(a, b);
    }
    if (op == '/'){
        return divide(a, b);
    }
};
 
const numbers = document.querySelectorAll('.numbers');
const screenInput = document.querySelector('#screen-input');
let firstArg = '';
let secondArg = '';
numbers.forEach(number => {
    number.addEventListener('click', x => {
        //console.log('number pushed')
        if (operator == '') {
            screenInput.textContent += number.textContent;
            firstArg = screenInput.textContent;
            console.log(firstArg);
        }
        else {
            screenInput.textContent += number.textContent;
            firstArg = screenInput.textContent;
            console.log(firstArg);
        }
    });
});

const operators = document.querySelectorAll('.operators');
let selectedOperator = '';
operators.forEach(operator => {
    operator.addEventListener('click', x => {
        secondArg = screenInput.textContent;
        if (selectedOperator != '' && firstArg != '' && secondArg != ''){
            firstArg = operate(selectedOperator,parseInt(firstArg),parseInt(secondArg));
            secondArg = '';
            console.log(firstArg);
        }
        selectedOperator = operator.textContent;
        screenInput.textContent = '';
    })
})