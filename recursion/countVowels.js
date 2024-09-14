// count the vowels in a string


// checking if character is vowel or not
function checkVowel(char) {
    const vowels = "aeiou"
    if (vowels.includes(char)) {
        return true
    }
    else return false;
}

// iteration
function countVowelLoop(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (checkVowel(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(`Iteration: no of vowels in given string : ${countVowelLoop("hello world")}`);

// recursion

function countVowelRecursive(str, strLen) {
    if (strLen == 1) {
        return Number(checkVowel(str[0]))
    }

    return countVowelRecursive(str, strLen - 1) + checkVowel(str[strLen - 1])
}
const str = 'aeiou'
console.log("recusion: no of vowels : ",countVowelRecursive(str,str.length));
