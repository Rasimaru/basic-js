const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // remove line with error and write your code here
  const obj = {};

  for (let i = 0; i < domains.length; i++) {
    const dom = domains[i].split('.').reverse();
    // console.log(dom);

    let part = '';
    for (let k = 0; k < dom.length; k++) {
      part += `.${dom[k]}`;
      obj[part] = (obj[part] || 0) + 1;
    }
  }

  return obj;
}

module.exports = {
  getDNSStats,
};
