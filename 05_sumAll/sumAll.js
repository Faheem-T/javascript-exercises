const sumAll = function(x, y) {
    // validating input
    if (typeof(x) != "number" || typeof(y) != "number" || x < 0 || y < 0 || Math.floor(x) != x || Math.floor(y) != y) {
        return "ERROR";
    }

    // switching variables if x is bigger
    if (x > y) {
        let temp = x;
        x = y;
        y = temp;
    }

    // calculating sum
    let sum = 0;
    for(let i = x; i <= y; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
