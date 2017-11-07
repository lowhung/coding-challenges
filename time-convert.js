function TimeConvert(num) {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours}:${minutes}`;
}
console.log(TimeConvert(63));
console.log(TimeConvert(126));
console.log(TimeConvert(45));
