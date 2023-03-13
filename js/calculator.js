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
let prevNum = 0;
let currentNum = '';
let currentAnswer = 0; 
let isFirstNum = true;
const ops = {
	" + ": add, 
	" - ": subtract, 
	" / ": divide, 
	" * ": multiply, 
	" = ": 'equals',
};

function isOperator(event) { 
	const operators = [" + ", " - ", " / ", " * ", " = "]; 
	return operators.includes(event.target.id)
}
function isNumber(event) { 
	const numbers = ['0','1','2','3','4','5','6','7','8','9'];
	return numbers.includes(event.target.id);
}

function updateDisplay(event) {
	if (isOperator(event)) { 
		let currentOp = event.target.id;
		let operator = ops[currentOp]; 
		console.log(operator);
		if(isFirstNum){
			prevNum = currentNum;
			currentNum = '0';
			isFirstNum = false;
		} 

		currentAnswer = operate(operator, parseInt(prevNum),parseInt(currentNum));
		prevNum = currentAnswer; 
		currentNum = ''; 
		displayValue = currentAnswer; 
	} else if(isNumber(event)){
		currentNum += event.target.id; 
		displayValue = currentNum;
	} else if(event.target.id=='clc'){ 
		displayValue = '';
		prevNum = 0;
		currentNum = '';
		currentAnswer = 0; 
		isFirstNum = true;
	} 
	
	display.textContent = displayValue; 
}

let display = document.getElementById('display');
const buttons = document.querySelectorAll('.row > button');

buttons.forEach(button => {
	button.addEventListener('click', updateDisplay);
})