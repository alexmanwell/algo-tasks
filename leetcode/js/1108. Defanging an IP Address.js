// https://leetcode.com/problems/defanging-an-ip-address

/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = (address) => {
  return (
    address
      .split(".")
      .join("[.]")
  );
};