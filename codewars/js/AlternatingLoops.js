// https://www.codewars.com/kata/55e529bf6c6497394a0000b5

const combine = (...arrays) => {
  let result = [];
  let max = Math.max(...arrays.map(v => v.length));
  for (let row = 0; row < max; row++) {
    for (let col = 0; col < arrays.length; col++) {
      if (arrays[col][row]) {
        result.push(arrays[col][row]);
      }
    }
  }

  return result
};