const repeatString = function(str, num) {
    let repeatedString = ''
    if (num < 0) return 'ERROR'
    // take the str input and concate it to the string the number of times
    for (let i = 0; i < num; i++) {
        repeatedString += str
    }
    return repeatedString

};

// repeatString('hey', 3) // returns 'heyheyhey'

// Do not edit below this line
module.exports = repeatString;
