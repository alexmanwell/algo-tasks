// https://www.codewars.com/kata/5853213063adbd1b9b0000be

const streetFighterSelection = (fighters, position, moves) => {
  let current = position;
  let hovered = [];
  for (let move of moves) {
    if (move === 'up') {
      if (current[0] === 0) {
        hovered.push(fighters[current[0]][current[1]]);
      } else {
        current[0]--;
        hovered.push(fighters[current[0]][current[1]]);
      }
    }
    if (move === 'down') {
      if (current[0] === 1) {
        hovered.push(fighters[current[0]][current[1]]);
      } else {
        current[0]++;
        hovered.push(fighters[current[0]][current[1]]);
      }
    }
    if (move === 'left') {
      if (current[1] === 0) {
        current[1] = 5;
        hovered.push(fighters[current[0]][current[1]]);
      } else {
        current[1]--;
        hovered.push(fighters[current[0]][current[1]]);
      }
    }
    if (move === 'right') {
      if (current[1] === 5) {
        current[1] = 0;
        hovered.push(fighters[current[0]][current[1]]);
      } else {
        current[1]++;
        hovered.push(fighters[current[0]][current[1]]);
      }
    }
  }

  return hovered;
};