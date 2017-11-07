function SimpleSymbols(str) {
    for(let i = 0; i < str.length; i++){
        if(/[a-zA-Z]+/.test(str[i])){
            if (str[i-1] == "+" && str[i+1] == "+"){
                return true;
            } else {
                return false;
            }
        }
    }
}

console.log(SimpleSymbols("+d+=3=+s+")); // => true
console.log(SimpleSymbols("f++d+")); // => false
