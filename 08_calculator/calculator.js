const add = function(a, b) {
  return a + b;  	
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, cur) => acc * cur, 1);
};

const power = function(a, b) {
  return a ** b;	
};

const factorial = function(n) {
  let range = function* (n) {
    while(n > 1){
      yield n--;
    }
  }
  return multiply(Array.from(range(n)));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
