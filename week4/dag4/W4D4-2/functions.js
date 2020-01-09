const addOne = function(numbers) {
  // Schrijf hier de functie...
  return numbers.map(number => number + 1);
};

const getWordLengths = function(someWords) {
  //Schrijf je functie...
  return someWords.map(word => word.length);
};

const findNeedle = (words, word) => {
  return words.indexOf(word);
};

// module.exports = getWordLengths;
// module.exports = addOne;
module.exports = findNeedle;
