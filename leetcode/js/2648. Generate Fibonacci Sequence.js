// https://leetcode.com/problems/generate-fibonacci-sequence/

/**
 * @return {Generator<number>}
 */
const fibGenerator = function*() {
  let prev = 0;
  let current = 1;
  while (true) {
    yield prev;
    const temp = prev;
    prev = current;
    current += temp;
  }
};