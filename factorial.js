function FirstFactorial(num) {
    let i = 0;
    let value = 1;
    while(i < num) {
        if (num - i > 0) {
            value *= (num - i);
            i++;
        } else {
            break;
        }
    }
    // code goes here
    return value;

}
console.log(FirstFactorial(4));
console.log(FirstFactorial(8));
// keep this function call here
//FirstFactorial(readline());
