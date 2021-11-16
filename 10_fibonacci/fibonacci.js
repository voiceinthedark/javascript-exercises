const fibonacci = function (n) {
  if (+n >= 0) {
    n = parseInt(n);
    let a = (b = 1);
    let fib = [a, b];
    let serie = function* (n) {
      do {
        yield a + b;
        [a, b] = [b, a + b];
      } while (--n > 1);
    };
    return fib.concat(Array.from(serie(n)))[n - 1];
  }
  return "OOPS";
};

console.log(fibonacci(2));

// Do not edit below this line
module.exports = fibonacci;
