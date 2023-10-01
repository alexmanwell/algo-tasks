// https://www.codewars.com/kata/5279f6fe5ab7f447890006a7

const pickPeaks = (arr) => {
  const result = {
    pos: [],
    peaks: []
  };

  for (let i = 1; i < arr.length - 1; i++) {
    const prev = arr[i - 1];
    const candidate = arr[i];
    let next = 1;
    while (candidate === arr[i + next]) {
      next++;
    }
    if (candidate > prev && candidate > arr[i + next]) {
      result.pos.push(i);
      result.peaks.push(candidate);
    }
  }

  return result;
};