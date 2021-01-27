function sum(a, b) {
  if(typeof a !== 'number' || typeof b !== 'number') throw new TypeError('One or more arguments are not a number');
  return a + b;
}

module.exports = sum;
