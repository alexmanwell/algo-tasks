// https://leetcode.com/problems/sleep/description/

/**
 * @param {number} millis
 */
const sleep = async (millis) => {
  return new Promise((res) => {
    setTimeout(res, millis);
  });
};

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */