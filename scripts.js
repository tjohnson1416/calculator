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
            alert('You know better than that...')
            clear();
        }
        else {
        return divide(a, b);
        }
    }
    if (op == '^'){
        return exponent(a, b);
    }
};

function clear(all = 0) {
    firstArg = '';
    secondArg = '';
    selectedOperator = '';
    if (all == 0){
        screenInput.textContent = '';
        lastNumber.textContent = '';
    }
};
 
const numbers = document.querySelectorAll('.numbers');
const screenInput = document.querySelector('#screen-input');

numbers.forEach(number => {
    number.addEventListener('click', x => {
        if (number.textContent == '.'){
            if (!screenInput.textContent.includes('.')) {
                if (selectedOperator == ''){
                    firstArg += number.textContent;
                    screenInput.textContent = firstArg;
                }
                else {
                    secondArg += number.textContent;
                    screenInput.textContent = secondArg;
                    console.log('2nd')
                }
            }
        }
        else {
            if (selectedOperator == ''){
                firstArg += number.textContent;
                screenInput.textContent = firstArg;
            }
            else {
                secondArg += number.textContent;
                screenInput.textContent = secondArg;
                console.log('2nd')
            }
        }
    });
});

const operators = document.querySelectorAll('.operators');
const lastNumber = document.querySelector('#last-number');
operators.forEach(operator => {
    operator.addEventListener('click', x => {
        if (selectedOperator != ''){
            firstArg = operate(selectedOperator,parseFloat(firstArg),parseFloat(secondArg));
            screenInput.textContent = operator.textContent;
            secondArg = '';
        }
        selectedOperator = operator.textContent;
        lastNumber.textContent = firstArg;
        screenInput.textContent = operator.textContent;
    })
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', x => {
    if (secondArg == '') {
        screenInput.textContent = `ANSWER: ${firstArg}`;
        lastNumber.textContent = firstArg; 
    }
    else {
        firstArg = operate(selectedOperator,parseFloat(firstArg),parseFloat(secondArg));
        screenInput.textContent = `ANSWER: ${firstArg}`;
        selectedOperator = ''
        lastNumber.textContent = firstArg;
    }
    clear(1);
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
        firstArg = parseFloat(firstArg) * -1;
        screenInput.textContent = firstArg;
    }
    else {
        secondArg = parseFloat(secondArg) * -1;
        screenInput.textContent = secondArg;
    }
})