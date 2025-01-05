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
function deleteDigit( n ) {
  const prepared_numbers = n.toString();
  const split = prepared_numbers.split('');

  const numbers = split.map((_, index) => {
    const tempArray = [...split];
    tempArray.splice(index, 1);
    return Number(tempArray.join(''));
  })

  return Math.max(...numbers);
}

module.exports = {
  deleteDigit
};
