/*
** INPUT: "aqrst", "ukaei", "ffooo"
=> |a q r s t|
|u k a e i|
|f f o o o|
** OUTPUT: "1-2"
*/
function matrixify(stringArray) {
  for (let i = 0; i < stringArray.length; i++){
    stringArray[i] = stringArray[i].split("");
  }
  return stringArray;
}

function vowelTest(block, indexString) {
  let vowels = new Array(2)
  for(let j = 0; j < block.length; j++){
    vowels[j] = block[j].filter((letter) => {
      return (/[^aeiou]/i).test(letter);
    });
  }
  if (vowels[0].length === 0 && vowels[1].length === 0) {
    return indexString;
  } else {
    return null;
  }
}

function VowelSquare(strArr) {
  const letterMatrix = matrixify(strArr);

  for (let j = 0; j < letterMatrix.length; j++){
    if (j + 1 === letterMatrix.length) {
      break;
    }
    for (let i = 0; i < letterMatrix[0].length; i++){
      if (i + 1 === letterMatrix[0].length) {
        break;
      } else {
        let block = [[letterMatrix[j][i], letterMatrix[j][i+1]], [letterMatrix[j+1][i], letterMatrix[j+1][i+1]]];
        const checkIndex = vowelTest(block, `${j}-${i}`);
        if (checkIndex){
          return checkIndex;
        }
      }
    }
  }
  return "not found";
}

console.log(VowelSquare(["aqrst", "ukaei", "ffooo"]));
