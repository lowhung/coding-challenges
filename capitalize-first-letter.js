function LetterCapitalize(str) {

    const list = str.split(" ");
    const newList = list.map((item) => {
        firstLetter = item.slice(0, 1).toUpperCase();
        item = firstLetter + item.slice(1);
        return item;
    });
    str = newList.join(" ");
    return str;
}

console.log(LetterCapitalize("i ran there")); // => I Ran There
console.log(LetterCapitalize("hello world"));

