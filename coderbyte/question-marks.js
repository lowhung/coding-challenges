

function getIndices(str){
  let indices = [[], []];
  for (let i = 0; i < str.length; i++){
    if (/^[0-9]/.test(str[i])){
      indices[0].push(i);
    } else if (str[i] === "?"){
      indices[1].push(i);
    }
  } return indices;
}

function threesCheck(array){
  for (let i = 0; i < array.length; i++){
    if (array[i] !== 3){
      return false;
    }
  } return true;
}

function QuestionsMarks(str) {
  const positions = getIndices(str);
  let countsArray = [];
  if (positions[0].length < 2 || positions[1].length < 3){
    return false;
  }
  let count = 0;
  let equalTen = false;
  for (let i = 0; i < positions[0].length; i++){
    count = 0;
    if (i + 1 === positions[0].length) break;
    if (parseInt(str[positions[0][i]]) + parseInt(str[positions[0][i+1]]) === 10){
      equalTen = true;
      for (let j = 0; j < positions[1].length; j++){
        if (positions[1][j] < positions[0][i+1] && positions[0][i] < positions[1][j]) {
          count++;
        }
      }
      countsArray.push(count);
    }
  }
  const verdict = threesCheck(countsArray);
  return verdict && equalTen;
}

console.log(QuestionsMarks("aa6?9")); // => false
console.log(QuestionsMarks("acc?7??sss?3rr1??????5")); // => true;
console.log(QuestionsMarks("arrb6???4xxbl5???eee5")); // => true
