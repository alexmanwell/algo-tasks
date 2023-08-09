// https://www.codewars.com/kata/541af676b589989aed0009e7/train/javascript

const countChange = (money, coins) => {
  const sortedCoins = coins.sort((a, b) => a - b);
  const coinBoxes = [];
  let coinBox = [];
  let fillCoins = [];
  const maxNominalCoin = sortedCoins[sortedCoins.length - 1];
  while (true) {
    coinBox = [...coinBox, ...fillCoins];
    let amountCoins = (coinBox.length > 0) ? coinBox.reduce((acc, coin) => acc + coin) : 0;
    if (amountCoins < money) {
      fillCoins = new Array(Math.ceil((money - amountCoins) / sortedCoins[0])).fill(sortedCoins[0]);
    }
    if (amountCoins === money) {
      coinBoxes.push(coinBox);
      coinBox = [...coinBox];
    }
    if (amountCoins >= money) {
      const min = Math.min(...coinBox);
      if (min < maxNominalCoin) {
        const index = coinBox.indexOf(min);
        const sortedCoinsIndex = sortedCoins.indexOf(min);
        coinBox[index] = sortedCoins[sortedCoinsIndex + 1];
        coinBox = coinBox.slice(0, index + 1);
        fillCoins = [];
      } else {
        break;
      }
    }
  }

  return coinBoxes.length;
};

console.log(countChange(10, [5, 2, 3, 1]));
console.log(countChange(11, [5, 7]));


