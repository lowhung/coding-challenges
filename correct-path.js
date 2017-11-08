function letterCounts(letterList){
    let letterObj = {};
    for(let i = 0; i < letterList.length; i++){
        if (!letterObj[letterList[i]]){
            letterObj[letterList[i]] = 1;
        } else {
            letterObj[letterList[i]]++;
        }
    }
    return letterObj;
}

function CorrectPath(str) {
    const letterList = str.split("");
    let letterObj = letterCounts(letterList);
    let up, left = 0;
    if (letterObj["u"]) { up = letterObj["u"]; }
    if (letterObj["l"]) { left = letterObj["l"]; }
    while(letterObj["?"] > 0){
        if (up > 0){
            str = str.replace("?", "d");
            letterObj["?"]--;
            letterObj["d"]++;
            up--;
        }
        if (left > 0){
            str = str.replace("?", "r");
            letterObj["?"]--;
            letterObj["r"]++;
            left--;
        }
        if (left === 0 && up === 0 && letterObj["r"] < 4){
            str = str.replace("?", "r")
            letterObj["?"]--;
            letterObj["r"]++;
        }
        if (left === 0 && up === 0 && letterObj["d"] < 4) {
            str = str.replace("?", "d");
            letterObj["?"]--;
            letterObj["d"]++;
        }
    console.log(str);
    }
    return str;
}
console.log(CorrectPath("???rrurdr?")); // => "dddrrurdrd"
console.log(CorrectPath("r?d?drdd")); // => "rrdrdrdd"
console.log(CorrectPath("drdr??rrddd?")); // => "drdruurrdddd"
