// https://www.codewars.com/kata/581dc1852d68e751180000c6
// TODO: doesn't pass next test:
//  Should not be enumerable
//  expected true to be false

Array.prototype.insert = function (position, item) {
  if (this.length <= position) {
    this.push(item);
    return this;
  }
  if (position === 0) {
    this.unshift(item);
    return this;
  }

  let temp = this[position];
  for(let i = 0; i < this.length; i++) {
    if (i === position) {
      this[position] = item;
    }
    if (i > position) {
      const current = this[i];
      this[i] = temp;
      temp = current;
    }
  }
  if (position < this.length) {
    this.push(temp);
  }

  return this;
};