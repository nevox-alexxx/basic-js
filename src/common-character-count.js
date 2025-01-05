const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1_arr = s1.split('');
  const s2_arr = s2.split('');

  const countChars = (str) => {
    const count = {};
    for (const char of str) {
      count[char] = (count[char] || 0) + 1;
    }
    return count;
  };

  const s1Count = countChars(s1_arr);
  const s2Count = countChars(s2_arr);

  let commonCount = 0;

  for (const char in s1Count) {
    if (s2Count[char]) {
      commonCount += Math.min(s1Count[char], s2Count[char]);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};