// https://www.codewars.com/kata/5829c6fe7da141bbf000021b

const COMPARE = {
  LESS: -1,
  EQUAL: 0,
  GREETER: 1
};

const removeExtraZeroes = (arr) => {
  let result = arr;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
      result = result.slice(0, i + 1);
      break;
    }
  }

  return result;
};


class Compare {
  constructor(x) {
    this.x = x;
  }

  compare(y) {
    let result = COMPARE.EQUAL;
    const lengthX = this.x.length;
    const lengthY = y.length;
    const minLength = Math.min(lengthX, lengthY);
    for (let i = 0; i < minLength; i++) {
      result = this.x[i] < y[i] ? COMPARE.LESS : this.x[i] > y[i] ? COMPARE.GREETER : COMPARE.EQUAL;
      if (result !== COMPARE.EQUAL && i < minLength) {
        break;
      }
      if (result === COMPARE.EQUAL && lengthX === lengthY) {
        continue;
      }
      if (result === COMPARE.EQUAL && i === minLength - 1 && minLength === lengthX) {
        result = COMPARE.LESS;
        break;
      }
      if (result === COMPARE.EQUAL && i === minLength - 1 && minLength === lengthY) {
        result = COMPARE.GREETER;
        break;
      }
    }

    return result;
  }
}

const cmp = (section1, section2) => {
  const x = removeExtraZeroes(section1.split(".").map(Number));
  const y = removeExtraZeroes(section2.split(".").map(Number));
  return new Compare(x).compare(y);
};