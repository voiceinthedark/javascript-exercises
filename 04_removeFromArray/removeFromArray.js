const removeFromArray = function(arrayValues, ...elements) {    
    return arrayValues.filter(element => elements.includes(element) === false)
};

// Do not edit below this line
module.exports = removeFromArray;
