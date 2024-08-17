// https://leetcode.com/problems/construct-the-rectangle/description

const isSimple = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return n >= 2;
};

/**
 * @param {number} area
 * @return {number[]}
 */
const constructRectangle = (area) => {
  if (isSimple(area)) {
    return [area, 1];
  }
  let width = Math.floor(Math.sqrt(area));
  while (area % width !== 0) {
    --width;
  }

  return [area / width, width];
};