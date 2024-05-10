// https://www.codewars.com/kata/5398beaf53f51088a9000fa7
// TODO: doesn't pass all tests.

function List() {
  let arr = Object.create(List.prototype);

  Object.defineProperty(arr, 'length', {
    value: 0,
    enumerable: false,
    writable: true,
  });

  for (let key in arguments) {
    arr[key] = arguments[key];
    ++arr.length;
  }

  return arr;
}

List.prototype.push = function (...items) {
  for (let item of items) {
    this[this.length] = item;
    ++this.length;
  }

  return this.length;
};

List.prototype.pop = function () {
  --this.length;
  const item = this[this.length];
  delete this[this.length];

  return item;
};

List.prototype.shift = function () {
  delete this[0];
  let copy = {};

  let index = 0;
  for (let item of Object.values(this)) {
    copy[index] = item;
    ++index;
  }
  this.arr = copy;
  this.length = Object.keys(this.arr).length;

  return this.length;
};

List.prototype.unshift = function (...items) {
  let index = 0;
  let newItems = {};
  for (let item of items) {
    newItems[index] = item;
    ++index;
  }
  for (let item of Object.values(this)) {
    newItems[index] = item;
    ++index;
  }
  this.arr = newItems;
  this.length = Object.keys(this.arr).length;

  return this.length;
};

List.prototype.filter = function (cb) {
  let result = new List();

  for (let index in Object.values(this)) {
    if (this.hasOwnProperty(index)) {
      const element = this[index];

      if (cb(element, index)) {
        result.push(element);
      }
    }
  }

  return result;
};