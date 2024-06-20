// https://leetcode.com/problems/capitalize-the-title

/**
 * @param {string} title
 * @return {string}
 */
const capitalizeTitle = (title) => {
  return title
    .split(" ")
    .map((word) =>
      word.length > 2
        ? word[0].toUpperCase() + word.substring(1).toLowerCase()
        : word.toLowerCase()
    )
    .join(" ");
};