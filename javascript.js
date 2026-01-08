function add(a, b){
	return a + b; 
};

function subtract(a, b){
	return a - b; 
};

function divide(a, b) {
    if(b == 0) 
        return "ERROR: Divide by 0"
	return a / b; 
};

function multiply(a, b){
	return a * b; 
};

let num1; 
let operatorl 
let num2; 

function operate(num1, num2, operator){
    switch (operator) {
        case "+": add(num1, num2)
        case "-": subtract(num1, num2)
        case "/": divide(num1, num2)
        case "*": multiply(num1, num2)
    }
}
