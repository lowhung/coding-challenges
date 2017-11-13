function getSumOfSquares(number){
  let sum = 0;
  for (let i = 1; i <= number; i++){
    sum += Math.pow(i, 2);
  }
  return sum;
}

function getSquareSum(number){
  let squareSum = 0;
  for (let i = 1; i <= number; i++){
    squareSum += i;
  }
  squareSum = Math.pow(squareSum, 2);
  return squareSum;
}

function sumSquareDistance(number){
  const sumSquares = getSumOfSquares(number);
  const squareSum = getSquareSum(number);
  return squareSum - sumSquares;
}

console.log(sumSquareDistance(10)); // => 2640
console.log(sumSquareDistance(100)); // => 25164150
