function nextChar(c) {
    if (/^[a-z]$/i.test(c) || /^[A-Z]$/i.test(c)){
        return String.fromCharCode(c.charCodeAt(0) + 1);
    } else {
        return c;
    }
}

function vowelTest(s) {
  return (/^[aeiou]$/i).test(s);
}

function LetterChanges(str) {
    let newString = '';
    for(var i = 0; i < str.length; i++){
        console.log(nextChar(str[i]));
        newString += capitalize(nextChar(str[i]));
    }
  return newString;

}

function capitalize(string) {
    if(vowelTest(string)){
        return string.toUpperCase();
    } else {
        return string;
    }

}
console.log(LetterChanges("hello*3"));
console.log(LetterChanges("abcdefghijk"));
console.log(LetterChanges("fun times!"));
