// const int = require("int");

function getFibs(limit){
  let fibs = [0, 1];
  for (let i = 2; i < limit; i++){
    fibs.push(fibs[i-1] + fibs[i-2]);
  }
  return fibs;
}

function evenFibonacci(limit){
  const fibs = getFibs(limit);
  const evenFibs = fibs.filter((fib) => {
    if (fib % 2 === 0 && fib < 4000000) return fib;
  });
  console.log(evenFibs);
  // let sum = int("0");
  let sum = 0;
  console.log("First sum", sum);
  for (let j = 0; j < evenFibs.length; j++){
    sum += evenFibs[j];
  }
  return sum;
}

console.log(evenFibonacci(900));
