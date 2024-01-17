function add(firstNumber, secondNumber){

    return firstNumber + secondNumber;



}

function substract(firstNumber, secondNumber){


    return firstNumber - secondNumber;


}

function multiply(firstNumber, secondNumber){

    return firstNumber * secondNumber;


}

function divide(firstNumber, secondNumber){

    if(secondNumber == 0)
    {
        return "Error: Dividing by 0."
    }

    return firstNumber / secondNumber;


}

function operate(firstNumber, secondNumber, operator)
{
    switch(operator)
    {
        case '+':
            return add(firstNumber,secondNumber);

        case '-':
            return substract(firstNumber, secondNumber);

        case '*':
            return multiply(firstNumber,secondNumber);

        case '/':
            return divide(firstNumber, secondNumber);
        
        default:
            return NaN;
    }
}

let firstCalcNumber = false;
let secondCalcNumber = false;
let calcOperator;

const display = document.querySelector('#display');
let displayValue = [];


// Number Buttons

const btnCero = document.querySelector('#cero');
btnCero.addEventListener('click',() =>{
    displayValue.push(0)
    display.innerText = displayValue.join('');
})
const btnOne = document.querySelector('#one');
btnOne.addEventListener('click',() =>{
    displayValue.push(1)
    display.innerText = displayValue.join('');
})
const btnTwo = document.querySelector('#two');
btnTwo.addEventListener('click',() =>{
    displayValue.push(2)
    display.innerText = displayValue.join('');
})
const btnThree = document.querySelector('#three');
btnThree.addEventListener('click',() =>{
    displayValue.push(3)
    display.innerText = displayValue.join('');
})
const btnFour = document.querySelector('#four');
btnFour.addEventListener('click',() =>{
    displayValue.push(4)
    display.innerText = displayValue.join('');
})
const btnFive = document.querySelector('#five');
btnFive.addEventListener('click',() =>{
    displayValue.push(5)
    display.innerText = displayValue.join('');
})
const btnSix = document.querySelector('#six');
btnSix.addEventListener('click',() =>{
    displayValue.push(6)
    display.innerText = displayValue.join('');
})
const btnSeven = document.querySelector('#seven');
btnSeven.addEventListener('click',() =>{
    displayValue.push(7)
    display.innerText = displayValue.join('');
})
const btnEight = document.querySelector('#eight');
btnEight.addEventListener('click',() =>{
    displayValue.push(8)
    display.innerText = displayValue.join('');
})
const btnNine = document.querySelector('#nine');
btnNine.addEventListener('click',() =>{
    displayValue.push(9)
    display.innerText = displayValue.join('');
})

const btnDecimal = document.querySelector('#decimal');
btnDecimal.addEventListener('click', () => {
    if (!displayValue.includes('.')) {
        displayValue.push('.');
        display.innerText = displayValue.join('');
    }
});


// Operator Buttons

const btnPlus = document.querySelector('#plus');
btnPlus.addEventListener('click', () => {
    if (firstCalcNumber) {
        secondCalcNumber = parseFloat(displayValue.join(''));
        firstCalcNumber = operate(firstCalcNumber, secondCalcNumber, calcOperator);
        display.innerText = firstCalcNumber;
        calcOperator = '+';
        displayValue.splice(0, displayValue.length);
    } else {
        firstCalcNumber = parseFloat(displayValue.join(''));
        calcOperator = '+';
        displayValue.splice(0, displayValue.length);
    }
});

const btnMinus = document.querySelector('#minus');
btnMinus.addEventListener('click', () => {
    if (firstCalcNumber) {
        secondCalcNumber = parseFloat(displayValue.join(''));
        firstCalcNumber = operate(firstCalcNumber, secondCalcNumber, calcOperator);
        display.innerText = firstCalcNumber;
        calcOperator = '-';
        displayValue.splice(0, displayValue.length);
    } else {
        firstCalcNumber = parseFloat(displayValue.join(''));
        calcOperator = '-';
        displayValue.splice(0, displayValue.length);
    }
});

const btnMultiply = document.querySelector('#multiply');
btnMultiply.addEventListener('click', () => {
    if (firstCalcNumber) {
        secondCalcNumber = parseFloat(displayValue.join(''));
        firstCalcNumber = operate(firstCalcNumber, secondCalcNumber, calcOperator);
        display.innerText = firstCalcNumber;
        calcOperator = '*';
        displayValue.splice(0, displayValue.length);
    } else {
        firstCalcNumber = parseFloat(displayValue.join(''));
        calcOperator = '*';
        displayValue.splice(0, displayValue.length);
    }
});

const btnDivide = document.querySelector('#divide');
btnDivide.addEventListener('click', () => {
    if (firstCalcNumber) {
        secondCalcNumber = parseFloat(displayValue.join(''));
        firstCalcNumber = operate(firstCalcNumber, secondCalcNumber, calcOperator);
        display.innerText = firstCalcNumber;
        calcOperator = '/';
        displayValue.splice(0, displayValue.length);
    } else {
        firstCalcNumber = parseFloat(displayValue.join(''));
        calcOperator = '/';
        displayValue.splice(0, displayValue.length);
    }
});

const btnEqual = document.querySelector('#equal')
btnEqual.addEventListener('click',equalValue);

const btnClear = document.querySelector('#clear')
btnClear.addEventListener('click', () =>{
    displayValue.splice(0, displayValue.length);
    firstCalcNumber = false;
    secondCalcNumber = false;
    calcOperator = 0;
    display.innerText = 0;
})

const btnBack = document.querySelector('#backspace');
btnBack.addEventListener('click', () =>{
    if(displayValue.length > 1)
    {
        displayValue.splice((displayValue.length - 1), 1);
        display.innerText = parseFloat(displayValue.join(''));  
    }
    else
    {
        display.innerText = 0;
    }
})

function equalValue()
{
  
    if(firstCalcNumber)
    {
        let valuePlaceholder;
        secondCalcNumber = parseFloat(displayValue.join(''));
        valuePlaceholder = operate(firstCalcNumber, secondCalcNumber, calcOperator);
        display.innerText = valuePlaceholder;
        displayValue.splice(0, displayValue.length);
        firstCalcNumber = valuePlaceholder;
        displayValue.push(valuePlaceholder);
        firstCalcNumber = false;
    }

    
}