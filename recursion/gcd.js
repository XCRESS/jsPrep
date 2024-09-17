// greatest common divisor

let a = 42
let b = 56
let arr42 = []
let arr56 = []

for (let i = 0; i <= a; i++) {
    if (a%i==0) {
        arr42.push(i)
    }
}
for (let i = 0; i <= b; i++) {
    if (b%i==0) {
        arr56.push(i)
    }
}

let commonvalues = arr42.filter(value => arr56.includes(value))
// console.log(commonvalues);



// through recursion

function gcd(n1,n2) {
    if (n1==n2) {
        return n1;
    }
    if (n1>n2) {
        return gcd(n1-n2,n2)
    }else{
        return gcd(n1,n2-n1)
    }
}