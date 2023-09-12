// https://www.codewars.com/kata/583203e6eb35d7980400002a

const countSmileys = (arr) => {
  let smiles = [];
  arr.forEach((item) => {
    if (item.match(/[)D]/)) {
      smiles.push(item);
    }
  });

  smiles = smiles.join("").split(/[)D]/);
  let count = 0;
  for (let smile of smiles) {
    smile = smile.substring(0, smile.length);
    if (smile.length <= 2) {
      let i = 0;
      if (smile[i] === ":" || smile[i] === ";") {
        i++;
      }
      if (i > 0 && i === smile.length) {
        count++;
      } else if (smile[i] === "-" || smile[i] === "~") {
        count++;
      }
    }
  }

  return count;
};

// Another solution. More simple.

const countSmileys = (arr) => {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
};