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
    if (left === 0 && up === 0){
      if (letterObj["r"] < 4) {
        str = str.replace("?", "r")
        letterObj["?"]--;
        letterObj["r"]++;
      }
      if (letterObj["d"] < 4) {
        str = str.replace("?", "d");
        letterObj["?"]--;
        letterObj["d"]++;
      }
    }
    if (letterObj["d"] === 4 && letterObj["r"] < 4){
      str = str.replace("?", "r");
      letterObj["r"]++;
      letterObj["?"]--;
    }
    if (letterObj["r"] === 4 && letterObj["d"] < 4){
      str = str.replace("?", "d");
      letterObj["d"]++;
      letterObj["?"]--;
    }
    if (letterObj["d"] === 4 && letterObj["r"] === 4){
      str = str.replace("?", "d");
      letterObj["d"]++;
      letterObj["?"]--;
    }
    if (letterObj["d"] >= 4 && letterObj["r"] === 4){
      str = str.replace("?", "u");
      letterObj["u"]++;
      up++;
      letterObj["?"]--;
    }
    if (letterObj["r"] >= 4 && letterObj["d"] === 4){
      str = str.replace("?", "l");
      letterObj["l"]++;
      left++;
      letterObj["?"]--;
    }
  }
  return str;
}
console.log(CorrectPath("???rrurdr?")); // => "dddrrurdrd"
console.log(CorrectPath("r?d?drdd")); // => "rrdrdrdd"
console.log(CorrectPath("drdr??rrddd?")); // => "drdruurrdddd"
