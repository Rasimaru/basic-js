const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // remove line with error and write your code here
  let string = '';
  if (Array.isArray(members)) {
    members.forEach((member) => {
      if (typeof member === 'string') {
        let char = member.toUpperCase().trim().slice(0, 1);
        string += char;
      }
    });
  }
  return string.split('').sort().join('');
}

module.exports = {
  createDreamTeam,
};
