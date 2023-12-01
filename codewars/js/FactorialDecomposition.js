// https://www.codewars.com/kata/5a045fee46d843effa000070

const decomp = (n) => {
  let map = {};
  for (let i = 2; i <= n; i++) {
    let number = i;
    let divisor = 2;
    while (number !== 1) {
      while (number % divisor === 0) {
        map[divisor] = map[divisor] ? map[divisor] + 1 : 1;
        number /= divisor;
      }
      divisor++;
    }
  }

  return Array.from(Object.entries(map))
    .map(([k, v]) => v !== 1 ? `${k}^${v}` : k)
    .join(" * ");
};