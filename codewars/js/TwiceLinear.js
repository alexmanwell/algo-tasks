// https://www.codewars.com/kata/5672682212c8ecf83e000050

const dblLinear = (n) => {
  const u = [1];
  let x = 0;
  let y = 0;
  for (let i = 0; i < n; i++) {
    const nextX = 2 * u[x] + 1;
    const nextY = 3 * u[y] + 1;
    if (nextX <= nextY) {
      u.push(nextX);
      x++;
      if (nextX === nextY) {
        y++
      }
    } else {
      u.push(nextY);
      y++
    }
  }

  return u[n]
};