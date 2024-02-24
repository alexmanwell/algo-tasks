// https://www.codewars.com/kata/5878520d52628a092f0002d0

const stringTransformer = (str) => {
  return str
    .split(" ")
    .map(v =>
      v.replace(/[a-zA-Z0-9]/gi,
        v =>
          v === v.toLowerCase()
            ? v.toUpperCase()
            : v.toLowerCase()
      )
    )
    .reverse()
    .join(" ");
};