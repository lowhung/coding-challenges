const { names } = require('./names.js');
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const sortedNames = names.sort();

function calculateNameScores(sortedNames) {
  const scores = sortedNames.map((name, index) => {
    const nameScore = name.split('').map(letter => {
      return alphabet.lastIndexOf(letter) + 1;
    }).reduce((a, b) => {
      return a + b;
    });
    return nameScore * (index + 1)
  });
  return scores.reduce((a, b) => {
    return a + b;
  });
}

console.log(calculateNameScores(sortedNames));
