function add(nums) {
	return nums.reduce((currentSum, num) => {
		return currentSum + num;
	}, 0);
}

console.log(add([1,23]));