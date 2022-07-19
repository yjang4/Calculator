function add (x, y){
    return Number(x) + Number(y);
}
function subtract (x, y) {
    return x - y;
}
function multiply (x, y) {
    return x * y;
}
function divide (x, y) {
    if(y == 0) return 'XD';
    let r = x / y;
    if(r.toString().length > 7) 
        return r.toFixed(7);
    else return r;
    
}
function operate(operator, x, y) {
    if(operator == '+') return add(x, y);
    else if(operator == '-') return subtract(x, y);
    else if(operator == '*') return multiply(x, y);
    else if(operator == '/') return divide(x, y);
    else return 0;
}
let numStore = '';
let operatorStore = '';
let result;
let justPressedOperator = false;
for(i = 0; i <= 9; i ++) { //number buttons
    let btn = document.getElementById(`num${i}-btn`);
    let display = document.getElementById("display");
    btn.addEventListener("click", function() {
        if(display.textContent != '0' && !justPressedOperator) { //display numbers pressed
            display.textContent += btn.textContent;
        }
        else {
            display.textContent = btn.textContent;
        }
        justPressedOperator = false;
    });
}
function operateHelper() {
    if(!justPressedOperator) {
        if(numStore != '' && operatorStore != '') { // adding two numbers
            result = operate(operatorStore, numStore, display.textContent);
            display.textContent = result;
            numStore = result;
        }
        else if(numStore == '') { // still needs one more input
            numStore = display.textContent;
        }
        justPressedOperator = true;
    }
}
let addBtn = document.getElementById('add-btn');
addBtn.addEventListener("click", function() {
    operateHelper();
    operatorStore = '+';
});
let subtractBtn = document.getElementById('subtract-btn');
subtractBtn.addEventListener("click", function() {
    operateHelper();
    operatorStore = '-';
});
let multiplyBtn = document.getElementById('multiply-btn');
multiplyBtn.addEventListener("click", function() {
    operateHelper();
    operatorStore = '*';
});
let divideBtn = document.getElementById('divide-btn');
divideBtn.addEventListener("click", function() {
    operateHelper();
    operatorStore = '/';
});
let equalBtn = document.getElementById('equal-btn');
equalBtn.addEventListener("click", function() {
    if(numStore != '' && operatorStore != '') { 
        result = operate(operatorStore, numStore, display.textContent);
        numStore = display.textContent;
        display.textContent = `${result}`;
        numStore = '';
        justPressedOperator = true;
    }
});
let clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener("click", function() {
    numStore = '';
    operatorStore = '';
    display.textContent = `0`;
    justPressedOperator = false;
    
});