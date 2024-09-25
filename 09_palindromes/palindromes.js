const palindromes = function (string) {
    const joinedString = Array.from(string.toLowerCase())
                    .filter(char => /[a-zA-Z0-9]/.test(char))
                    .join("");
    
    // 
    const strLen = joinedString.length - 1;
    for (let i = 0; i < Math.floor(strLen / 2); i++) {
        if (joinedString[i] !== joinedString[strLen - i]) {
            return false;
        }
    }
    return true;
};



// Do not edit below this line
module.exports = palindromes;
