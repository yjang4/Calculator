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
}
let btn = document.getElementById('add-btn');
let numStore = '';
let operatorStore = '';

for(i = 0; i <= 9; i ++) {
    let btn = document.getElementById(`num${i}-btn`);
    let display = document.getElementById("display");
    btn.addEventListener("click", function() {
        if(operatorStore == '') {
            display.textContent += btn.textContent;
        }
        
    });
}

btn.addEventListener("click", function() {
    numStore = document.getElementById("display").textContent;
});