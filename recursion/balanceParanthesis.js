
function bal(arr, i=0, count=0) {
    if (i==arr.length) {
        return count==0
    }
    if (count<0) {
        return false
    }
    if (arr[i]=='(') {
        return bal(arr,i+1,count+1)
    }
    if (arr[i]==')') {
        return bal(arr,i+1,count-1)
    }
}
let arr = ['(',')','(',')']
console.log(bal(arr));
