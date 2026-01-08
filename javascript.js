let num1 = ""; 
let operator = ""; 
let num2 = ""; 
let display = document.querySelector("#display"); 
let isError = false; 
let didEqualOp = false; 

function add(a, b){
	return a + b; 
};

function subtract(a, b){
	return a - b; 
};

function divide(a, b) {
    if(b == 0) {
        display.textContent = "ERROR: Divide by 0";
        display.style.color = "red"; 
        num1 = ""; 
        operator = "";
        num2 = "";
        isError = true; 
        return;
    }
	return a / b; 
};

function multiply(a, b){
	return a * b; 
};

function operate(num1, num2, operator){
    switch (operator) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "/": return divide(num1, num2);
        case "*": return multiply(num1, num2);
    }
}

document.querySelectorAll("button.num").forEach((button) => {
    button.addEventListener("click", displayNum)
});

document.querySelectorAll("button.op").forEach((button) => {
    button.addEventListener("click", opResult)
});

document.querySelector("button#equals").addEventListener("click", equalResult); 
document.querySelector("button#clear").addEventListener("click", clear);

function equalResult(e){
    if(num1 !== "" && num2 !== "" && !operator !== "") {
        didEqualOp = true; 
        displayResult(); 
    }
}

function displayNum(event) {
    if (isError === true) {
        isError = false; 
        display.textContent = ""; 
        display.style.color = "black"
    }

    if(didEqualOp === true) {
        display.textContent = ""; 
        num1 = ""; 
        didEqualOp = false; 
    }
    
    if (operator === "") {
        num1 += event.target.textContent; 
        display.textContent += event.target.textContent; 
    }
    else {
        if(num2 === "")
            display.textContent = ""; 
        
        num2 += event.target.textContent; 
        display.textContent += event.target.textContent; 
    }
}

function clear() {
    num1 = ""; 
    num2 = ""; 
    operator = ""; 
    display.textContent = ""; 
}

function opResult(event) {
    didEqualOp = false; 
    if(num1 === "") return;
         
    if(num2 !== "") 
        if (!displayResult()) return; 
    operator = event.target.textContent; 
}

function displayResult(){
    const result = operate(parseFloat(num1), parseFloat(num2), operator); 
    if (isError === true) return false; 
    num1 = result; 
    num2 = ""; 
    operator = ""; 
    display.textContent = result.toFixed(5);
    return true; 
}
