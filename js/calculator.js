const add = function(nums) {
	return nums.reduce((currentSum, num) => {
		return currentSum + num;
	}, 0);
}

const subtract = function(nums) {
	return nums.reduce((currentSum, num) => {
		return currentSum - num;
	});
} 

const multiply = function(a,b) {
	return a*b;
}

const divide = function(a,b) {
	return a/b;
}

const operate = function(operator, ...oparands) {
	console.log(divide(10,10));
}

console.log(operate(add,1,2));