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

console.log(multiply(10,10));