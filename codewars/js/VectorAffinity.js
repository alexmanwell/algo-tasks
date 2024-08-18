// https://www.codewars.com/kata/5498505a43e0fd83620010a9

const vectorAffinity = (xs,ys) => {
  if (!xs.length && !ys.length) {
    return 1;
  }

  const min = Math.min(xs.length, ys.length);
  let count = 0;
  for (let i = 0; i < min; i++) {
    if (xs[i] === ys[i]) {
      ++count;
    }
  }

  return count / Math.max(xs.length, ys.length);
};