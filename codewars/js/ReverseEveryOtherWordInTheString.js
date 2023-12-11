// https://www.codewars.com/kata/58d76854024c72c3e20000de

const reverse = (str) => {
  const words = str.trim().split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(
      (i % 2 === 0)
        ? words[i]
        : words[i]
          .split("")
          .reverse()
          .join("")
    );
  }

  return result.join(" ");
};