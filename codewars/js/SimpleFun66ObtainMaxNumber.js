// https://www.codewars.com/kata/5893f03c779ce5faab0000f6

const obtainMaxNumber = (arr) => {
  let current = 0;
  arr.sort((a, b) => a - b);
  while (current < arr.length) {
    const next = arr.indexOf(arr[current], current + 1);
    if (arr[current] && arr[next] && next !== -1) {
      arr[current] += arr[next];
      arr[next] = null;
    } else {
      current++;
    }
    if (arr[current] && arr.includes(arr[current])) {
      current = arr.indexOf(arr[current]);
    }
  }

  return Math.max(...arr.filter(n => n !== null));
};