// a < b < c, for which,
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.
function pythagoreanTriplet(goal){
  for (let i = 1; i < goal; i++){
    for (let j = 1; j < goal; j++){
      for (let m = 1; m < goal; m++){
        if (i < j < m){
          const equation = Math.pow(i, 2) + Math.pow(j, 2);
          if (equation === Math.pow(m, 2)){
            if (i + j + m === goal){
              return `${i}${j}${m}`
            }
          }
        }
      }
    }
  }
  return false;
}

// console.log(pythagoreanTriplet(1000));
console.log(200*375*425);
