function length(str) {
    let count = 0
    while (str[count]!== undefined) {
        count++
    }
    return count
}
function lenRec(str,count=0) {
    if (str=="") {
        return 0;
    }
    if (str[count]== undefined) {
        return count;
    }
    return lenRec(str,count+1)
}

console.log(lenRec('hello'));
