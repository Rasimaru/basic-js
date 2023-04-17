const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
	// remove line with error and write your code here
	let res = email.slice(email.lastIndexOf('@') + 1)
	return res;
}

module.exports = {
	getEmailDomain
};
