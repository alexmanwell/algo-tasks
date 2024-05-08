// https://www.codewars.com/kata/53b7bc844db8fde50800020a

const computeIncline = (p1, p2) => {
  let diffY = p1[1] - p2[1];
  let diffX = p1[0] - p2[0];
  return diffY / diffX;
};

const equalPoints = (p1, p2) => {
  for (let i = 0; i < p1.length - 1; i++) {
    if (p1[i] !== p2[i]) {
      return false;
    }
  }

  return true;
};

const isHorizontal = (points) => {
  for (let i = 0; i < points.length - 1; i++) {
    if (points[i][1] !== points[i + 1][1]) {
      return false;
    }
  }
  return true;
};

const isVertical = (points) => {
  for (let i = 0; i < points.length - 1; i++) {
    if (points[i][0] !== points[i + 1][0]) {
      return false;
    }
  }
  return true;
};

const onLine = (points) => {
  if (points.length <= 2) {
    return true;
  }
  if (isHorizontal(points)) {
    return true;
  }
  if (isVertical(points)) {
    return true;
  }
  let index = 0;
  let incline = computeIncline(points[0], points[1]);
  while (index + 1 < points.length && incline === 0) {
    incline = computeIncline(points[index], points[index + 1]);
    index++;
  }
  next:
    for (let i = index; i < points.length - 1; i++) {
      if (equalPoints(points[i], points[i + 1])) {
        continue next;
      }

      if (incline !== computeIncline(points[i], points[i + 1])) {
        return false;
      }
    }

  return true;
};