// https://www.codewars.com/kata/525d50d2037b7acd6e000534

Array.prototype.square = function () {
  return this.map(item => item * item);
};

Array.prototype.cube = function () {
  return this.map(item => item ** 3);
};

Array.prototype.average = function () {
  return this.reduce((acc, item) => acc + item, 0) / this.length;
};

Array.prototype.sum = function () {
  return this.reduce((acc, item) => acc + item, 0);
};

Array.prototype.even = function () {
  return this.filter(item => item % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter(item => item % 2 !== 0);
};