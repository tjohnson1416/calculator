let firstArg = '';
let secondArg = '';
let selectedOperator = '';

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

function exponent(a, b) {
    return a ** b;
}

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
        if (b == 0){
            return 'Ya sure?'
        }
        return divide(a, b);
    }
    if (op == '^'){
        return exponent(a, b);
    }
};

function clear() {
    firstArg = '';
    secondArg = '';
    selectedOperator = '';
    screenInput.textContent = '';
};
 
const numbers = document.querySelectorAll('.numbers');
const screenInput = document.querySelector('#screen-input');

numbers.forEach(number => {
    number.addEventListener('click', x => {
        if (selectedOperator == ''){
            firstArg += number.textContent;
            screenInput.textContent = firstArg;
        }
        else {
            secondArg += number.textContent;
            screenInput.textContent = secondArg;
            console.log('2nd')
        }
    });
});

const operators = document.querySelectorAll('.operators');
operators.forEach(operator => {
    operator.addEventListener('click', x => {
        if (selectedOperator != ''){
            firstArg = operate(selectedOperator,parseInt(firstArg),parseInt(secondArg));
            screenInput.textContent = firstArg;
            secondArg = '';
        }
        selectedOperator = operator.textContent;
    })
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', x => {
    if (secondArg == '') {
        screenInput.textContent = `ANSWER: ${firstArg}`; 
    }
    else {
        firstArg = operate(selectedOperator,parseInt(firstArg),parseInt(secondArg));
        screenInput.textContent = `ANSWER: ${firstArg}`;
        selectedOperator = ''
    }
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', x => {
    clear();
});

const delButton = document.querySelector('#del');
delButton.addEventListener('click', x => {
    if (selectedOperator == ''){
        firstArg = firstArg.slice(0,-1);
        screenInput.textContent = firstArg;
    }
    else {
        secondArg = secondArg.slice(0,-1);
        screenInput.textContent = secondArg;
    }
});

const signs = document.querySelector('#sign');
signs.addEventListener('click', x => {
    if (selectedOperator == ''){
        firstArg = parseInt(firstArg) * -1;
        screenInput.textContent = firstArg;
    }
    else {
        secondArg = parseInt(secondArg) * -1;
        screenInput.textContent = secondArg;
    }
})