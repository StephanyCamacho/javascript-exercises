const palindromes = function (str) {
    const origWord = (str) => str.toLowerCase().replace(/[\W_]/g, '')
    const cleanStr = origWord(str);
    const reverseStr = cleanStr.split('').reverse().join('');
    return reverseStr === cleanStr
}

module.exports = palindromes

// explain how regex works