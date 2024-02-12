// https://www.codewars.com/kata/52998bf8caa22d98b800003a

const manhattanDistance = (pointA, pointB) => {
  const [x1, y1] = pointA;
  const [x2, y2] = pointB;
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
};