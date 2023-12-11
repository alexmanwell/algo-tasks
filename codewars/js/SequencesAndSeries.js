// https://www.codewars.com/kata/5254bd1357d59fbbe90001ec

const getScore = (n) => {
  const step = 50;
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += step * (i + 1);
  }

  return result;
};