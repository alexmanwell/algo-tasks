// https://www.codewars.com/kata/5a4bba4e80eba8df2d00012d

const PERIODS = ["24", "60", "60"].reverse();

const TIMES = ["day", "hour", "minute", "second"];

const totalTime = (arrays) => {
  const splitArrays = arrays
    .map(arr => arr.split(":").map(Number))
    .map(arr => {
      while (arr.length < 3) {
        arr.unshift(0);
      }
      return arr;
    });
  let times = new Array(3).fill(0);
  for (let arr of splitArrays) {
    for (let i = 0; i < arr.length; i++) {
      times[i] += arr[i];
    }
  }
  times.reverse();
  let result = [];
  let tail = 0;
  for (let i = 0; i < PERIODS.length; i++) {
    const time = times[i] + tail;
    if (time >= PERIODS[i]) {
      tail = Math.floor(time / PERIODS[i]);
      result.unshift(time - PERIODS[i] * tail);
    } else {
      result.unshift(time);
      tail = 0;
    }
  }
  result.unshift(tail);

  return !result.every(t => t === 0)
    ? result
      .reduce((arr, t, index) => {
        const str = t + " " + TIMES[index];
        if (t > 1) {
          arr.push(str + "s");
        } else if (t === 1) {
          arr.push(str);
        }

        return arr;
      }, [])
      .join(", ")
    : "0";
};