const removeFromArray = function (array, ...args) {
    for (const arg of args) {
    indexToBeRemove = array.indexOf(arg);
    if (indexToBeRemove >= 0 && indexToBeRemove < array.length) {
      array.splice(indexToBeRemove, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
