// https://leetcode.com/problems/add-two-promises/

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async (promise1, promise2) => {
  return Promise.all([promise1, promise2])
    .then((elements) => {
        let result = 0;
        for (let elem of elements) {
          result += Number(elem);
        }
        return result;
      }
    );
};