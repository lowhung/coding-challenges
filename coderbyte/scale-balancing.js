function getWeights(array) {
  let weights = JSON.parse(array);
  for (let i = 0; i < weights.length; i++){
    weights[i] = parseInt(weights[i]);
  }
  return weights;
}

function checkRight(leftWeight, rightWeight, weights) {
  for (let i = 0; i < weights.length; i++){
    const newRight = rightWeight + weights[i];
    if (leftWeight === newRight){
      return weights[i];
    }
  }
  return null;
}

function checkLeft(leftWeight, rightWeight, weights) {
  for (let i = 0; i < weights.length; i++){
    const newLeft = leftWeight + weights[i];
    if (rightWeight === newLeft){
      return weights[i];
    }
  }
  return null;
}

function checkRightTwo(leftWeight, rightWeight, weights) {
  for (let i = 0; i < weights.length; i++){
    const newLeft = leftWeight + weights[i];
    if (newLeft === rightWeight){
      return weights[i];
    }
  }
  return null;
}

function checkLeftTwo(leftWeight, rightWeight, weights) {
  for (let i = 0; i < weights.length; i++){
    const newRight = rightWeight + weights[i];
    if (newRight === leftWeight){
      return weights[i];
    }
  }
  return null;
}

function ScaleBalancing(strArr) {
  const leftRight = JSON.parse(strArr[0]);
  const left = leftRight[0];
  const right = leftRight[1];
  let weights = getWeights(strArr[1]);

  let answer = "";
  /*
  * Scenarios:
  * 1) No weights added cause left === right already
  * 2) One weight to one side
  * 3) One weight to each side
  * 4) Two weights to one side
  */
  // Scenario 1) No weights needed
  if (left === right){
    return "No weight needed";
  } else if (!weights){
    return "Not possible"
  }

  // Scenario 2) One weight to one side
  for (let i = 0; i < weights.length; i++){
    const newLeft = left + weights[i];
    const newRight = right + weights[i];
    if (newLeft === right || newRight === left){
      return weights[i];
    }
  }

  // Scenario 3) One weight to each side
  for (let i = 0; i < weights.length; i++){
    let savedList = getWeights(strArr[1]);
    const savedWeight = weights[i];
    const newLeft = left + weights[i];
    const newRight = right + weights[i];
    savedList.splice(i, 1);

    const secondWeightOne = checkLeft(left, newRight, savedList);
    const secondWeightTwo = checkRight(newLeft, right, savedList);

    if (secondWeightOne) return `${savedWeight},${secondWeightOne}`;
    if (secondWeightTwo) return `${savedWeight},${secondWeightTwo}`;
  }

  // Scenario 4) two weights to one
  for (let i = 0; i < weights.length; i++){
    let savedList = getWeights(strArr[1]);
    const savedWeight = weights[i];
    const newLeft = left + savedWeight;
    const newRight = right + savedWeight;
    savedList.splice(i, 1);

    const secondWeightOne = checkLeftTwo(left, newRight, savedList);
    const secondWeightTwo = checkRightTwo(newLeft, right, savedList);

    if (secondWeightOne) return `${savedWeight},${secondWeightOne}`;
    if (secondWeightTwo) return `${savedWeight},${secondWeightTwo}`;
  }
  return "not possible";
}

console.log(ScaleBalancing(["[3,4]", "[1,2,7,7]"])); // => "1"
console.log(ScaleBalancing(["[3,5]", "[3,5,1,7]"])); // => "1"
console.log(ScaleBalancing(["[13,4]", "[1,2,3,6,14]"])); // => "3,6"
