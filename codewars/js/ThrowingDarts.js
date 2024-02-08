// https://www.codewars.com/kata/525dfedb5b62f6954d000006

const scoreThrows = (radii) => {
  let result = 0;
  if (radii.length === 0) {
    return result;
  }
  if (radii.every(v => v < 5)) {
    result += 100;
  }
  for (const r of radii) {
    if (r > 4 && r < 11) {
      result += 5;
    } else if (r < 5) {
      result += 10;
    }
  }

  return result;
};