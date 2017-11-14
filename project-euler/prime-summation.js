function getPrimes(max) {
  var sieve = [], i, j, primes = [];
  for (i = 2; i <= max; ++i) {
    if (!sieve[i]) {
      primes.push(i);
      for (j = i << 1; j <= max; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
}

function primeSum(limit){
  const primes = getPrimes(limit);
  let sum = 0;
  for (let i = 0; i < primes.length; i++){
    sum += primes[i];
  }
  return sum;
}


console.log(primeSum(2000000));
