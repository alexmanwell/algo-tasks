// https://www.codewars.com/kata/5143cc9694a24abcd2000001

Array.prototype.containsAll = function (arr) {
  for (let item of arr) {
    if (!this.includes(item)) {
      return false;
    }
  }

  return true;
};