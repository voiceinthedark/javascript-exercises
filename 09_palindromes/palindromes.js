const palindromes = function (palindrome) {
    let filteredText = palindrome.match(/[A-Za-z]+/g);
    let joined = filteredText.join("").toLowerCase();
    let reversed = filteredText.join("").split('').reverse().join('').toLowerCase();
    return joined === reversed;

    // console.log(joined, reversed);
};

// palindromes("A car, a man, a maraca.");
// Do not edit below this line
module.exports = palindromes;
