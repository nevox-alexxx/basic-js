const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  const countMap = {};
  let result = [];

  for (let i = 0; i < names.length; i++) {
    let currentName = names[i];

    if (countMap[currentName]) {
      let newName = `${currentName}(${countMap[currentName]})`;

      while (countMap[newName]) {
        countMap[currentName]++;
        newName = `${currentName}(${countMap[currentName]})`;
      }

      result.push(newName);
      countMap[currentName]++;
      countMap[newName] = 1; 
    } else {
      result.push(currentName);
      countMap[currentName] = 1;
    }
  }

  return result
}

module.exports = {
  renameFiles
};
