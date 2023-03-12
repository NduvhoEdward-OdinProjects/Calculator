const add = function(a,b){
	return a + b;
}
const subtract = function(a,b){
	return a - b;
} 

const multiply = function(a,b){
	return a * b;
}

const divide = function(a,b){
	return a / b;
}

const operate = function(operator, a, b) {
	return operator(a,b);
}

let displayValue = '';
const operators = [" + ",
				   " - ",
				   " / ",
				   " x "];
let operands = [];
let usedOps = [];
let tempOperand = ''; 
let tempOp = ''; 

function isOperator(event) {
	return operators.some(op => op==event.target.id)
}

function updateDisplay(event) {
	if (!isOperator){
		tempOperand += event.target.id
	} else {
		operands.push(tempOperand);
		tempOperand = '';
		tempOp = event.target.id;
		usedOps.push(tempOp);
	} 
	if (event.target.id=='clc'){
		displayValue = '';
		operands = [];
		usedOps = [];
		display.textContent = displayValue;
		return;
	}
	
	for (let i = 0; i < operands.length; i++) {
		//displayValue = '';
		displayValue += operands[i]; 
		displayValue += usedOps[i]; 
	}
	display.textContent = displayValue; 
}

let display = document.getElementById('display');
const buttons = document.querySelectorAll('.row > button');

buttons.forEach(button => {
	button.addEventListener('click', updateDisplay);
})