// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

const solution = (list) => {
  let result = [];
  let values = [];
  let i = 0;
  while (i < list.length) {
    if (Math.abs(list[i] - list[i + 1]) === 1) {
      values.push(list[i]);
    } else {
      values.push(list[i]);
      result.push(values);
      values = [];
    }
    i++;
  }

  let str = '';
  for (key of result) {
    str = (key.length < 3) ? str + key + ',' : str + key[0] + '-' + key[key.length - 1] + ',';
  }

  return str.substring(0, str.length - 1);
};