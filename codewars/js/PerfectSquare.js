// https://www.codewars.com/kata/584e93a70f60247eb8000132

const perfectSquare = (str) => {
  const lines = str.split("\n");
  const size = lines.length;
  for (const line of lines) {
    if (line.length !== size) {
      return false;
    }
    for (const item of line) {
      if (item !== ".") {
        return false;
      }
    }
  }

  return true;
};