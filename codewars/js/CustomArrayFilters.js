// https://www.codewars.com/kata/53fc954904a45eda6b00097f

Array.prototype.even = function () {
  return this.filter(v =>
    typeof v === "number"
    && !isNaN(v)
    && Number.isInteger(v)
    && v % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter(v =>
    typeof v === "number"
    && !isNaN(v)
    && Number.isInteger(v)
    && v % 2 === 1);
};

Array.prototype.under = function (x) {
  return this.filter(v =>
    typeof v === "number"
    && !isNaN(v)
    && Number.isInteger(v)
    && v < x);
};

Array.prototype.over = function (x) {
  return this.filter(v =>
    typeof v === "number"
    && !isNaN(v)
    && Number.isInteger(v)
    && v > x);
};

Array.prototype.inRange = function (min, max) {
  return this.filter(v =>
    typeof v === "number"
    && !isNaN(v)
    && Number.isInteger(v)
    && v >= min && v <= max
  );
};