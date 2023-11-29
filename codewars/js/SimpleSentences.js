// https://www.codewars.com/kata/5297bf69649be865e6000922

const makeSentence = (parts) => {
  return parts
    .filter(p => p !== ".")
    .join(" ")
    .trim()
    .replace(/ , /g, ", ") + ".";
};