const ftoc = function(degree) {
  return +((degree - 32) * (5/9)).toFixed(1);
};

const ctof = function(degree) {
  return +(degree * (9 / 5) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
