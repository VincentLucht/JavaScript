const palindromes = function (palindrome) {
    let noPunctuation = removePunctuation(string=palindrome);

    let originalString = noPunctuation.split(" ").join("").toLowerCase();
    let reversedString = originalString.split("").reverse().join("");

    if (originalString == reversedString) {
        console.log("It's a palindrome!")
    } else {
        console.log("It's not a palindrome.")
    }
};

function removePunctuation(string) {
    let punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    let result = string.replace(punctuationRegex, "");
    return result;
}

// Do not edit below this line
module.exports = palindromes;