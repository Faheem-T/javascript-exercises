const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let repString = "";
    for (let i = 0; i < num; i++){
        repString += string;
    }
    return repString;
};

// Do not edit below this line
module.exports = repeatString;
