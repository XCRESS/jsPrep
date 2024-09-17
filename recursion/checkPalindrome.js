//  check wheater the given string is palindrome or not

function palindrome(str) {
    if (str.length<=1) {
        return true;
    }
    if (str[0]==str[str.length-1]) {
        return palindrome(str.slice(1,-1));
    }else return false;
}

console.log(palindrome("madam"));
