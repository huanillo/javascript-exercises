const palindromes = function (text) {
    var punctuation = /[\s\.,?!]/g;
    var newText = text.replace(punctuation, "").toLowerCase();

    return newText === newText.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
