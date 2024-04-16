// https://www.codewars.com/kata/5411e3e95f3a7f6a7a0000e3

Array.prototype.reduce = function (process, initial) {
  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    if (!initial) {
      initial = item;
    } else {
      initial = process(initial, item);
    }
  }

  return initial;
};