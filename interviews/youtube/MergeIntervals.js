// https://leetcode.com/problems/merge-intervals/description/
// https://www.youtube.com/watch?v=2Od3MV1-mpk&list=PL0k-9Y7O1GwccXKHRzmvVj17yB7T9pjTo

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let result = [];
  while (intervals.length) {
    let [current, next] = [intervals[0], intervals[1]];
    if (next && next[0] <= current[1]) {
      if (current[1] > next[1]) {
        next = current;
      } else {
        next = [current[0], next[1]];
      }
      intervals[1] = next;
      intervals.shift();
    } else {
      result.push(current);
      intervals.shift();
    }
  }

  return result;
};