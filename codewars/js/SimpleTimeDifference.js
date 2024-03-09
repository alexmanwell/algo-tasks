// https://www.codewars.com/kata/5b76a34ff71e5de9db0000f2

const TIMES = {
  "MINUTE": 60,
  "HOUR": 60 * 60,
  "DAY": 24 * 3600
};

const solve = (arr) => {
  if (arr.length === 1) {
    return "23:59";
  }

  arr = arr
    .map(time => time.split(":"))
    .map(items => [Number(items[0]), Number(items[1])])
    .map((items) => items[0] * TIMES.HOUR + items[1] * TIMES.MINUTE)
    .sort((a, b) => a - b);

  let differences = [];
  for (let i = 0; i < arr.length - 1; i++) {
    differences[i] = arr[i + 1] - arr[i];
  }
  differences.push((TIMES.DAY - arr[arr.length - 1]) + arr[0]);
  const maxTime = Math.max(...differences);
  let hours = Math.floor(maxTime / TIMES.HOUR);
  hours = hours.toString().length === 1 ? "0" + hours : hours;
  let minutes = (maxTime - +hours * TIMES.HOUR- TIMES.MINUTE) / TIMES.MINUTE;
  minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;

  return hours + ":" + minutes;
};