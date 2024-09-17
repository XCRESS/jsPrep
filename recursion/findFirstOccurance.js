// find the first occurance of the given element

const arr = [3,2,1,4,6,5,1]
const key = 1

function firstOccur(ary) {   
    let foundAt = []
    for (let i = 0; i < ary.length; i++) {
        if (key==ary[i]) {
         foundAt.push(i); 
        }
    }
    return foundAt;
}
// console.log(`element found at position = ${firstOccur(arr)}`);

function firstOccurR(ary, i = 0, foundAt=[]) {
    if (i == ary.length){
        if (foundAt.length ==0) {
            return -1;
        }
        return foundAt;
    }
    if (ary[i]==key) {
        foundAt.push(i)
    }
    return firstOccurR(ary, i+1, foundAt)
}
console.log(firstOccurR(arr));
