const leapYears = function(year) {
    // leap years are divisible by 400
    if (year % 400 === 0) {
        return true;
        // leap years are not divisible by 100
    } else if (year % 100 === 0 && year % 400 === 0) {
        return true
        // leap year is divisible by four
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
