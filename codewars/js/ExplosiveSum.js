// https://www.codewars.com/kata/52ec24228a515e620b0005ef

const sum = (n) => {
  const result = new Array(n + 1).fill(0)
  result[0] = 1
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      result[j] += result[j - i]
    }
  }

  return result[n];
};