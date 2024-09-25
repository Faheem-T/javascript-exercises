const fibonacci = function(n) {
    // Changing to number if string
    if (typeof(n) == "string") {
        n = +n;
    }

    // Handling negative numbers
    if (n < 0) {
        return "OOPS";
    }

    // Setting the initial two elements of the sequence
    let sequence  = [1, 1];

    for (let i = 2; i < n; i++) {
        let lastElement = sequence[i - 1];
        let lastToLastElement = sequence[i - 2];
        sequence.push(lastElement + lastToLastElement);
    }

    // Return 0 if n is zero, otherwise return last element of the sequence
    return (n !== 0 ? sequence.at(n - 1) : 0);
};

// Do not edit below this line
module.exports = fibonacci;
