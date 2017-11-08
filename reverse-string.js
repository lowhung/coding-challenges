function FirstReverse(str) {
    var newString = '';
    for(var i = str.length - 1; i >= 0; i--){
        newString += str[i];
    }
  // code goes here
  return newString;

}

console.log(FirstReverse("Hi there"));
