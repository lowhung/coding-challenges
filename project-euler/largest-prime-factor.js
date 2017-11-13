function getMax(list){
  let max = -Infinity;
  for (let j = 0; j < list.length; j++){
    if (list[j] > max){
      max = list[j];
    }
  }
  return max;
}


function largestPrime(number){
  let factors = [];
  let divisor = 2;
  while (number > 1){
    while (number % divisor === 0){
      factors.push(divisor);
      number /= divisor;
    }
    divisor++;
  }
  if (divisor < Math.sqrt(number)){
    if (number > 1){
      factors.push(divisor);
    }
  }
  console.log(factors);
  const max = getMax(factors);
  return max;
}

console.log(largestPrime(13195)); // => want to find this
console.log(largestPrime(600851475143)); // => want to find this
