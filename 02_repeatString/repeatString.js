const repeatString = function(string, number) {
    if(number >= 0){
        let resultString = '';
        for (let i = 0; i < number; i++) {
            resultString += string;        
        }
        return resultString;
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
