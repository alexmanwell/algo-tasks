// https://www.codewars.com/kata/58a672d6426bf38be4000057

const middle_point = (x1, y1, z1, x2, y2, z2, x3, y3, z3) => {
  const points = [[x1, x2, x3], [y1, y2, y3], [z1, z2, z3]];
  for (const point of points) {
    if (!point.every(v => v === point[0])) {
      const min = Math.min(...point);
      const max = Math.max(...point);
      const between = point.find(v => v !== min && v !== max);
      return point.indexOf(between) + 1;
    }
  }

  return -1;
};