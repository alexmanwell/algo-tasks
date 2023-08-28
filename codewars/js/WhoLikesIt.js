// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

const likes = (names) => {
  let text;
  const length = names.length;
  switch (length) {
    case 0:
      text = "".concat("no one");
      break;
    case 1:
      text = "".concat(names[0]);
      break;
    case 2:
      text = "".concat(`${names[0]} and ${names[1]}`);
      break;
    case 3:
      text = "".concat(`${names[0]}, ${names[1]} and ${names[2]}`);
      break;
    default:
      text = "".concat(`${names[0]}, ${names[1]} and ${names.slice(2).length} others`);
      break;
  }

  return (names.length < 2) ? text.concat(" likes this") : text.concat(" like this");
};

// Another solutions.

const likes = (names) => {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)]
};