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
let operand1 = 0;
let prevOp = '';
let operand2 = '';
let currentAnswer = 0; 
let isFirstNum = true;
const ops = {
	"+": add, 
	"-": subtract, 
	"/": divide, 
	"*": multiply, 
	"=": 'equals',
};

function isOperator(event) { 
	const operators = ["+", "-", "/", "*", "="]; 
	return operators.includes(event.target.id) 
}
function isNumber(event) { 
	const numbers = ['0','1','2','3','4','5','6','7','8','9','.'];
	return numbers.includes(event.target.id);
}

function update(event) {
	if (isOperator(event)) { 
		let currentOp = event.target.id; 
		let operator = ops[currentOp]; 
		if(isFirstNum){
			operand1 = operand2;
			prevOp = ops[currentOp];
			isFirstNum = false;
			operand2 = '';
			return;
		} 
		// If a user wants to change operator
		if (operand2=='') {
			prevOp = ops[currentOp];
			return;
		}
		if (currentOp=='=') { 
			// If not enough operands have been entered before '='
			if (prevOp === 'equals') return; 
			
			currentAnswer = operate(prevOp, parseFloat(operand1),parseFloat(operand2));
			currentAnswer = parseFloat(currentAnswer.toFixed(10));
			operand1 = currentAnswer; 
			prevOp = ops[currentOp];
			operand2 = ''; 
			displayValue = currentAnswer; 
			display.textContent = displayValue; 
			return;
		} 

		currentAnswer = operate(prevOp, parseInt(operand1),parseInt(operand2));
		operand1 = currentAnswer; 
		prevOp = ops[currentOp];
		operand2 = ''; 
		displayValue = currentAnswer; 
	} else if(isNumber(event)){
		operand2 += event.target.id; 
		displayValue = operand2;
	} else if(event.target.id=='clc'){ 
		displayValue = '';
		operand1 = 0;
		operand2 = '';
		currentAnswer = 0; 
		isFirstNum = true;
	} else if (event.target.id=='%') {
		operand2 /= 100; 
		displayValue = operand2;
	} else if (event.target.id=='+/-') {
		operand2 *= -1; 
		displayValue = operand2;	
	} else if (event.target.id=='del') {
		operand2 = operand2.slice(0, -1);
		displayValue = operand2;
	}
	
	display.textContent = displayValue; 
}

let display = document.getElementById('display');
const buttons = document.querySelectorAll('.row > button');

buttons.forEach(button => {
	button.addEventListener('click', update);
})

function handleKeyPress(event) {
	const key = event.key;
	const element = document.getElementById(key);
	
	if (event.key === 'Enter') {
		document.getElementById('=').click();
	} else if (event.key === 'Backspace') {
		document.getElementById('del').click();
	}

	if (element) {
    	element.click();
  	}
}

document.addEventListener('keydown', handleKeyPress);
