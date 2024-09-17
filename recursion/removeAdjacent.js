//  remove the adjacent characters like aa bb cc

const str = "aabbccdef";

function rvAdj(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i]==str[i+1]) {
            str = str.slice(0,i) + str.slice(i+1)
            i--;
        }
    }
    return str
}
function rvAdjForce(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i]==str[i+1]) {
            str = str.slice(0,i) + str.slice(i+2)
            i--;
        }
    }
    return str
}
// console.log(rvAdjForce(str));


// recursive

function rvAdjRec(str,i=0) {
    if (i==str.length) {
        return str;
    }
    if (str[i]==str[i+1]) {
        str = str.slice(0,i) + str.slice(i+2)
        return rvAdjRec(str,i)
    }
    return rvAdjRec(str,i+1)
}
// console.log(rvAdjRec(str));


