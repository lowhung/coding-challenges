function isPalindrome(string){
  let midPoint = Math.floor(string.length/2);
  const last = string.length - 1;
  for (let i = 0; i < midPoint; i++){
    if (string[i] !== string[last - i]){
      return false;
    }
  }
  return true;
}

function largestPalindromeProduct(digits){
  let largestPalindrome = -Infinity;
  let number = 0;
  for (let i = 1; i < 1000; i++){
    for (let j = i; j < 1000; j++){
      number = i * j;
      if (isPalindrome("" + number)){
        if (number > largestPalindrome){
          largestPalindrome = number;
        }
      }
    }
  }
  return largestPalindrome;
}

console.log(isPalindrome("1001")); // => yes
console.log(isPalindrome("10201")); // => yes
console.log(isPalindrome("1011")); // => no

console.log(largestPalindromeProduct(3)); // => 906609
