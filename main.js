function add (x, y){
    return x + y;
}
function subtract (x, y) {
    return x - y;
}
function multiply (x, y) {
    return x * y;
}
function divide (x, y) {
    return x / y;
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
for(i = 0; i <= 9; i ++) {
    let btn = document.getElementById(`num${i}-btn`);
    let display = document.getElementById("display");
    btn.addEventListener("click", function() {
        if(numStore != '0') {
            display.textContent += btn.textContent;
        }
        else {
            display.textContent = btn.textContent;
        }
        
    });
}

let addBtn = document.getElementById('add-btn');
addBtn.addEventListener("click", function() {
    if(numStore != '' && operatorStore != '') {
        result = operate(operatorStore, numStore, display.textContent);
    }
    else if(numStore == '') {
        numStore = display.textContent;
        display.textContent = '0';
    }
    operatorStore = '+';
});
let subtractBtn = document.getElementById('subtract-btn');
subtractBtn.addEventListener("click", function() {
    operatorStore = '-';
});
let multiplyBtn = document.getElementById('multiply-btn');
multiplyBtn.addEventListener("click", function() {
    operatorStore = '*';
});
let divideBtn = document.getElementById('divide-btn');
divideBtn.addEventListener("click", function() {
    operatorStore = '/';
});
let equalBtn = document.getElementById('equal-btn');
equalBtn.addEventListener("click", function() {
    display.textContent += `${result}`;
});