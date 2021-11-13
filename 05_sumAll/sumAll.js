const range = function* (start, end) {
    if(start > end){
        [start, end] = [end, start];
    }

    while (start <= end) {
        yield start++;
    }
}

const sumAll = function(start, end) {
    return Number.isInteger(start) 
        && Number.isInteger(end) 
        && start >= 0 && end >= 0
        ? Array.from(range(start, end)).reduce((accumulator, current) =>        accumulator + current, 0)
        : 'ERROR';
};

// let arr = Array.from(range(1,4))
// console.log(arr);

// Do not edit below this line
module.exports = sumAll;
