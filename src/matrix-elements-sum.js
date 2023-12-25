const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // remove line with error and write your code here
  let sum = 0;
  if (matrix) {
    //column(**matrix[0]**) iteration
    for (let i = 0; i < matrix[0].length; i++)
      //row iteration
      for (let k = 0; k < matrix.length; k++) {
        //if value 0 => skip to next column
        if (matrix[k][i] === 0) {
          break;
        }
        sum += matrix[k][i];
      }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
