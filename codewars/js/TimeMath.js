// https://www.codewars.com/kata/5aceae374d9fd1266f0000f0

const PERIODS = [24, 60, 60];

const toArr = (time1) => {
  return time1.split(":").map(Number);
};

const timeMath = (time1, op, time2) => {
  let result = [];
  const times1 = toArr(time1);
  const times2 = toArr(time2);
  let operation = op === "+" ? 1 : -1;
  let tail = 0;
  for (let i = PERIODS.length - 1; i >= 0; i--) {
    let diff = times1[i] + operation * (times2[i] + tail);
    if (diff >= 0) {
      tail = 0;
      if (diff >= PERIODS[i]) {
        diff = diff - PERIODS[i];
        tail = 1;
      }
      result.push(diff);
    } else {
      diff = PERIODS[i] + diff;
      result.push(diff);
      tail = 1;
    }
  }

  return result
    .reverse()
    .map(n => {
      if (n.toString().length === 1) {
        n = "0" + n;
      }
      return n;
    })
    .join(":");
};