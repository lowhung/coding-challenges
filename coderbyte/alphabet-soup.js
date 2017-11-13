function AlphabetSoup(str) {

    let listString = str.split("");
    listString = listString.sort();
    str = listString.join("");
    return str;
}
console.log(AlphabetSoup("coderbyte")); // => "bcdeeorty"
console.log(AlphabetSoup("hooplah")); // => "ahhloop"

