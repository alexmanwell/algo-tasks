// https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript

const sumStrings = (a, b) => {
  a = String(a).split("").map(digit => Number(digit));
  b = String(b).split("").map(digit => Number(digit));

  const diffLength = Math.abs(a.length - b.length);
  if (a.length < b.length) {
    a = [...new Array(diffLength).fill(0), ...a];
  } else {
    b = [...new Array(diffLength).fill(0), ...b];
  }

  let quotient = 0;
  const result = [];
  for (let i = a.length - 1; i >= 0; i--) {
    const sum = a[i] + b[i] + quotient;
    quotient = Math.floor(sum / 10);
    result.unshift(sum % 10);
  }
  if (quotient === 1) {
    result.unshift(quotient);
  }
  let index = 0;
  while (result[index] === 0) {
    result.shift();
    index++;
  }

  return result.join("");
};

//console.log(sumStrings('123', '456'));
//console.log(sumStrings('021197853016928348342295040216', '77641046595782551259154190481'));
console.log(sumStrings('800', '9567'));
console.log(sumStrings('00103', '08567'));

//098838899612710899601449230697