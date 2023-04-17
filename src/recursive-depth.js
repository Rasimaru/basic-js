const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
	calculateDepth(arr) {
		// remove line with error and write your code here
		let res = 1;
		if (Array.isArray(arr)) {
			let max = 0;
			arr.forEach((element) => {
				let count = this.calculateDepth(element);
				if (count > max) {
					max = count;
				}
			});
			res += max;
		} else {
			return 0;
		}
		return res;
	}
}

module.exports = {
	DepthCalculator
};
