function rSpaces(str) {
    let result = ""
    let char ;
    for (let i = 0; i < str.length; i++) {
        char = str[i]
        if (char==" ") {
            continue
        }
        result+=char
    }
    return result;
}
let str  = "v e s h a n t"
// console.log(rSpaces(str));

function recursive(str,i=0,result="") {
    if (i == str.length) {
        return result
    }
    if (str[i]!==" ") {
        result+=str[i]
    }
    return recursive(str,i+1,result)
}
console.log(recursive(str));