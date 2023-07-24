// https://leetcode.com/problems/is-object-empty/description/

/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
const isEmpty = (obj) => {
  for (let props in obj) {
    if (Object.hasOwn(obj, props)) {
      return false;
    }
  }

  return true;
};