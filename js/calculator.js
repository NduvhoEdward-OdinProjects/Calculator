function add(nums) {
	return nums.reduce((currentSum, num) => {
		return currentSum + num;
	}, 0);
}

function subtract(nums) {
	return nums.reduce((currentSum, num) => {
		return currentSum - num;
	});
} 

function multiply(a,b) {
	return a*b;
}

function divide(a,b) {
	return a/b;
}

console.log(divide(10,10));