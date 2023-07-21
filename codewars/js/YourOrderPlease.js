// https://www.codewars.com/kata/55c45be3b2079eccff00010f

const order = (words) => {
  const values = words.split(' ');
  let results = [];

  for (let i = 0; i < values.length; i++) {
    const characters = values[i].split('');
    for (let j = 0; j < characters.length; j++) {
      if (characters[j].match("[1-9]")) {
        const index = characters[j];
        results[index] = values[i];
      }
    }
  }

  return results.slice(1, results.length).join(' ');
};