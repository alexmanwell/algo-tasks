// https://www.codewars.com/kata/546d5028ddbcbd4b8d001254

const generateNumbers = (n) => {
  return new Array(n + 1)
    .fill(0)
    .map(() =>
      Array(n + 1)
        .fill(0)
    );
};

const partitions = (n) => {
  let dp = generateNumbers(n);
  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1;
  }
  for (let i = 0; i <= n; i++) {
    dp[0][i] = 0;
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - i];
      }
    }
  }

  return dp[n][n];
};