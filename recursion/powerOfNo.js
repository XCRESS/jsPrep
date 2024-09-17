// find the power of the given number

function findPower(value, power) {
    value = value**power
    return value
}
// console.log(findPower(2,4));

function recursive(value,power) {
    if (power==0) {
        return 1;
    }
    return value * recursive(value,power-1)
}
console.log(recursive(2,6));
