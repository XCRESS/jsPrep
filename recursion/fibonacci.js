// fibnacci pattern though interation and recursion
// f(n) = f(n-1) + f(n-2)

// through iteration
function fibnacci(len) {
    let arr =[0,1];
    for (let i = 0; i < len-2; i++) {
        arr[i+2]= arr[i]+arr[i+1]
    }
    // let sum = arr.reduce((acc,cur)=> acc+cur,0)

    return arr.toString() ;
}

// console.log(fibnacci(6));


// through recursion

function fibnacciR(len,arr=[0,1]) {
    if (arr.length == len) {
        return arr.toString();
    }
    let next = arr[arr.length-1]+ arr[arr.length-2];
    arr.push(next);

    return fibnacciR(len,arr);
}

// console.log(fibnacciR(5));



//  sir's method for direct fibonacci val of no

function recursiveFibbonacci(value) {
    if (value<=1) {
        return value;
    }

    return recursiveFibbonacci(value-1) + recursiveFibbonacci(value-2)
}
// console.log(recursiveFibbonacci(5))

function iterativeFibbonacci(value){
    let n0 = 0
    let n1 = 1 
    
    for (let i = 0; i < value.length; i++) {    
        temp = n0 + n1;
        n0 = n1;
        n1 = temp;
    }
    return n1
}
