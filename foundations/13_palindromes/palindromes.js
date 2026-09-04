const palindromes = function (phrase) {
    phrase = phrase.toLowerCase().replaceAll(/[.,\/#!$%' '\^&\*;:{}=\-_`~()]/g,"")
    let reveredString = phrase.split('').reverse().join('');

    return phrase === reveredString

    // console.log(phrase)
    // console.log(reveredString)
};
    
// Do not edit below this line
module.exports = palindromes;
// console.log(palindromes('A car, a man, a maraca.'))