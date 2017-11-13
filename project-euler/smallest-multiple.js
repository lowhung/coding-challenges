
/**
 * smallestMultiple - returns the smallest positive number that is evenly divisible by all of the numbers from 1 to $number
 *
 * @param  {integer} number specifies the bounds
 * @return {integer}        the smallest positive number
 */
function smallestMultiple(number){
  let smallest = 0;
  let count = number;
  let j = 1;
  for (let i = 1; i < Infinity; i++){
    count = number;
    j = 1;
    while (i % j === 0 && j <= number){
      count--;
      j++;
      if (count === 0){
        smallest = i;
        return smallest;
      }
    }
  }
  return "not possible";
}

console.log(smallestMultiple(20)); // => 2520
