// https://leetcode.com/problems/find-the-winning-player-in-coin-game

/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
const losingPlayer = (x, y) => {
  return Math.min(x, Math.floor(y / 4)) % 2 === 1
    ? "Alice"
    : "Bob";
};