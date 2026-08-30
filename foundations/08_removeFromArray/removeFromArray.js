const removeFromArray = function(arr, ...removeAbles) {
   
    let filteredArray = []
    // check if arr does not contain the removeable for each item
    for (let i = 0; i < arr.length; i++) {
        if (!removeAbles.includes(arr[i])) {
            filteredArray.push(arr[i])
        }
    }
    return filteredArray;
}

// Do not edit below this line
module.exports = removeFromArray;
