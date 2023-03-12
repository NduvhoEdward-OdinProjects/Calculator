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
function updateDisplay(event) {
	console.log(event);
}

let display = document.getElementById('display');
const buttons = document.querySelectorAll('.row > button');

buttons.forEach(button => {
	button.addEventListener('click', updateDisplay);
})