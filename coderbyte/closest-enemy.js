function matrixify(stringArray) {
  for (let i = 0; i < stringArray.length; i++){
    stringArray[i] = stringArray[i].split("");
  }
  return stringArray;
}

function oneTwoTest(matrix){
  const numberObject = {};
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[0].length; j++){
      if (!numberObject[matrix[j][i]]) {
        numberObject[matrix[j][i]] = 1;
      } else {
        numberObject[matrix[j][i]]++;
      }
    }
  }
  if (numberObject["2"]){
    if (numberObject["1"] === 1){
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function getCoordinatesList(matrix){
  let coordinateObject = {"1": [], "2": []};
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[0].length; j++){
      if (matrix[j][i] === "1") {
        coordinateObject["1"].push([j, i]);
      } else if (matrix[j][i] === "2"){
        coordinateObject["2"].push([j, i]);
      }
    }
  }
  return coordinateObject;
}

function getBoundaryCoordinates(boardSize){
  let boundaryCoordinates = [];
  for (let i = 0; i < boardSize[0]; i++){
    for (let j = 0; j < boardSize[1]; j++){
      if (i === 0 || j === 0) {
        boundaryCoordinates.push([i, j]);
      } else if (i === boardSize[0] - 1 || j === boardSize[1] - 1) {
        boundaryCoordinates.push([i, j]);
      }
    }
  }
  return boundaryCoordinates;
}

function moveCount(coordinateObject, boardSize){
  const oneCoordinates = coordinateObject["1"][0];
  const twoCoordinates = coordinateObject["2"];
  const boundaryCoordinates = getBoundaryCoordinates(boardSize);

  let moveArray = [];
  let xMoves;
  let yMoves;
  for (let i = 0; i < twoCoordinates.length; i++){
    // y-coordinates are the same
    if (twoCoordinates[i][0] === oneCoordinates[0]){
      // both coordinates are on the boundary
      if (oneCoordinates[1] === 0 && twoCoordinates[i][1] === boardSize[1] - 1){
        xMoves = 1;
        yMoves = 0;
      }
      else if (oneCoordinates[1] === boardSize[1] - 1 && twoCoordinates[i][1] === 0){
        xMoves = 1;
        yMoves = 0;
      } else {
        xMoves = twoCoordinates[i][1] - oneCoordinates[1];
        yMoves = 0;
      }
      // x-coordinates are the same
    } else if (twoCoordinates[i][1] === oneCoordinates[1]){
      // both coordinates are on the boundary
      if (oneCoordinates[0] === 0 && twoCoordinates[i][0] === boardSize[0]-1) {
        yMoves = 1;
        xMoves = 0;
      }
      // both coordinates still on boundary
      else if (oneCoordinates[0] === boardSize[0]-1 && twoCoordinates[i][0] === 0){
        yMoves = 1;
        xMoves = 0;
        // neither on boundary
      } else {
        yMoves = twoCoordinates[i][0] - oneCoordinates[0];
        xMoves = 0;
      }
      // Neither of the coordinates are equal
    } else if (twoCoordinates[i][1] !== oneCoordinates[1] && twoCoordinates[i][0] !== oneCoordinates[0]){
      // Both are on a boundary
      if (oneCoordinates[1] === 0 && twoCoordinates[i][1] === boardSize[1]-1){
        xMoves = 1;
        yMoves = twoCoordinates[i][0] - oneCoordinates[0];
      }
      // Neither on boundary
      else if (oneCoordinates[1] === boardSize[1]-1 && twoCoordinates[i][1] === 0){
        xMoves = 1;
        yMoves = twoCoordinates[i][0] - oneCoordinates[0];
      }
      else if (oneCoordinates[0] === 0 && twoCoordinates[i][0] === boardSize[0]-1){
        yMoves = twoCoordinates[i][1] - oneCoordinates[1];
        xMoves = 1;
      }
      // Neither on boundary
      else if (oneCoordinates[0] === boardSize[0]-1 && twoCoordinates[i][0] === 0){
        yMoves = twoCoordinates[i][1] - oneCoordinates[1];
        xMoves = 1;
      }
      else {
        yMoves = twoCoordinates[i][1] - oneCoordinates[1];
        xMoves = twoCoordinates[i][0] - oneCoordinates[0];
      }
    }
    const moves = Math.abs(xMoves) + Math.abs(yMoves);
    moveArray.push(moves);
  }
  return moveArray;
}

function minimum(moveArray){
  let min = Infinity;
  for (let i = 0; i < moveArray.length; i++){
    if (moveArray[i] < min){
      min = moveArray[i];
    }
  }
  return min;
}

function ClosestEnemyII(strArr) {
  const matrix = matrixify(strArr);
  if (!oneTwoTest(matrix)){
    return 0;
  }
  const boardSize = [matrix[0].length, matrix.length];
  const moveArray = moveCount(getCoordinatesList(matrix), boardSize);
  const minMoves = minimum(moveArray);
  return minMoves;
}

// console.log(ClosestEnemyII(["102", "000", "200"])); // => 1
console.log(ClosestEnemyII(["000", "100", "200"])); // => 1
console.log(ClosestEnemyII(["0000", "2010", "0000", "2002"])); // => 2
console.log(ClosestEnemyII(["0000", "1000", "0002", "0002"])); // => 2
console.log(ClosestEnemyII(["00000", "10020", "00000", "00002", "02002"])); // =>  2
