//  reversing a string

// iterative approch

const reverseStringIterative = (str) => {
    let newStr = "";
    let length = str.length - 1;
    while (length>=0) {
        newStr = newStr + str[length];
        length-=1;
    }
    return newStr;
}

// recursive approch

const revStrRec = (str) => {
    // base condition
    if (str==="") {
        return str;
    }
    
    return str[str.length - 1] + revStrRec(str.substring(0, str.length - 1)) 
}

console.log(reverseStringIterative("hello"));
console.log(revStrRec("world"));
