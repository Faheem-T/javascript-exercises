const reverseString = function(string) {
    const letters = string.split("");
    let reverseString = "";
    for (let i = letters.length - 1; i >= 0; i--) {
        reverseString += letters[i];
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
