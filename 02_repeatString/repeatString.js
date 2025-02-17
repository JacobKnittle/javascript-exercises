const repeatString = function(string, numOfCopies) {
    let repeatedString = '';

    if (numOfCopies < 0){
        return "ERROR"
    }

    for (let i = 0; i < numOfCopies; i++){
        repeatedString += string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
