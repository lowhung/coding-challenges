function LongestWord(sen) {
    const list = sen.split(" ");
    let longestWord = '';
    for(let i  = 0; i < list.length; i++) {
        list[i] = list[i].replace(/[^a-zA-Z]/g, '');
        if (list[i].length > longestWord.length){
            longestWord = list[i];
        }
    }
  return longestWord;
}

console.log(LongestWord("I love dogs"));
console.log(LongestWord("fun&!! time"));
