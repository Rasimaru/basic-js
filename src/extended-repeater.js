const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	// remove line with error and write your code here
	let string = String(str);

	let repeatTimes = options.repeatTimes || 1;
	let additionRepeatTimes = options.additionRepeatTimes || 1;

	let separator = options.separator || '+';
	let additionSeparator = String(options.additionSeparator || '|');

	let addition = String(options.addition);
	let result = '';

	if (addition === "undefined") {
		addition = '';
	}

	for (let i = 0; i < repeatTimes; i++) {
		result += string;
		for (let k = 0; k < additionRepeatTimes; k++) {
			result += addition;

			if (k !== additionRepeatTimes - 1) {
				result += additionSeparator;
			}
		}

		if (i !== repeatTimes - 1) {
			result += separator;
		}
	}

	return result;
}


module.exports = {
	repeater
};
