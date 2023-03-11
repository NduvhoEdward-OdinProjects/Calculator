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
console.log(add([1,23,12]));
console.log(subtract([1,23,1]));