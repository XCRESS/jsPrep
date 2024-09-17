// for array 

function checkOcc(arr ,key ,i = 0 ,result = [] ) {
    if (arr == []) {
        return result;
    }
    if (i==arr.length) {
        return result;
    }
    if (key == arr[i] ) {
        result.push(i);
    }
    return checkOcc(arr,key,i+1,result)
}

let arr = [2,1,0,1,2]

console.log(checkOcc(arr,2));
