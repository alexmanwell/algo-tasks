// https://www.codewars.com/kata/52685f7382004e774f0001f7

const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MINUTE = 60;
const ONE_SECOND = 1;

const dialTimes = (seconds) => {
  const times = [SECONDS_PER_HOUR, SECONDS_PER_MINUTE, ONE_SECOND];
  let result = [];
  times.forEach(time => {
    result.push(Math.floor(seconds / time));
    seconds = seconds % time;
  });

  return result;
};

const humanReadable = (seconds) => {
  return dialTimes(seconds).map(time =>
    time === 0 ? "00"
      : time.toString().split("").length === 1 ? "0" + time
      : time.toString()).join(":");
};