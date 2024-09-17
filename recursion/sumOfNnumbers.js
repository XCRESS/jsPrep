// sum of n numbers 

function sum(num) {
    if (num<=0) {
        return num;
    }
    return num + sum(num-1)
}
console.log(sum(5));