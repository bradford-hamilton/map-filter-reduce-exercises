function multiplyBy10 (array) {
  return array.map(function(arrayItem) {
    return arrayItem * 10;
  });
}

function shiftRight (array) {
  return array.map(function(value, index, array) {
    return array[index - 1] || array[array.length - 1];
  });
}

function onlyVowels (array) {
  return array.map(function (word) {
    return word.replace(/[^aeiou]/ig,'');
  }); 
}

function doubleMatrix (array) {
  return array.map(function(array) {
    return array.map(function(num) {
      return num * 2;
    });
  });
}

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
