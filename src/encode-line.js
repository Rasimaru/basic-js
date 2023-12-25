const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // remove line with error and write your code here
  let arr = str.split('');
  let res = ``;
  let counter = 1;

  for (let i = 0; i < arr.length; i++) {
    // console.log(`char = ${char}`);
    // console.log(`element = ${arr[i]}`);
    // console.log(`counter = ${counter}`);

    if (arr[i] === arr[i + 1]) {
      counter++;
    } else {
      res += `${counter}${arr[i]}`;
      counter = 1;
    }
  }
  return res.replaceAll(1, '');
}

module.exports = {
  encodeLine,
};
