function CheckNums(num1,num2) {
    if (num1 === num2) return -1;
    if (num2 > num1) {
        return true;
    } else {
        return false;
    }

}

console.log(CheckNums(2, 2));
console.log(CheckNums(2, 3));
console.log(CheckNums(3, 2));
