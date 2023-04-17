const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	// remove line with error and write your code here
	let value = String(n);
	let maxValue = 0;
	for (let i = 0; i < value.length; i++) {
		// let num = `${value.slice(0, i) + value.slice(i + 1)}`;
		let num = value.replace(value[i], '');
		console.log(num);
		let newValue = parseInt(num, 10);

		if (newValue > maxValue) {
			maxValue = newValue;
		}
	}
	return maxValue;
}
module.exports = {
	deleteDigit
};
