// https://www.codewars.com/kata/527a6e602a7db3456e000a2b

Object.prototype.hash = function (path) {
  const [...parsed] = path.split('.');
  let obj = this;
  for (const property of parsed) {
    if (!obj.hasOwnProperty(property)) {
      return undefined
    }
    obj = obj[property];
  }

  return obj;
};

Object.prototype.hash = function (string) {
  return string
    .split('.')
    .reduce((result = this, item) =>
        result[item],
      this
    );
};