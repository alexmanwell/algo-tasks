// https://www.codewars.com/kata/57d29ccda56edb4187000052

const firstPlyaerWinCases = [
  ['rock', 'lizard'],
  ['paper', 'rock'],
  ['scissors', 'lizard'],
  ['lizard', 'paper'],
  ['spock', 'rock'],
  ['scissors', 'paper'],
  ['rock', 'scissors'],
  ['spock', 'scissors'],
  ['paper', 'spock'],
  ['lizard', 'spock']
];

const rpsls = (pl1, pl2) => {
  if (pl1 === pl2) {
    return 'Draw!';
  }

  return firstPlyaerWinCases.some(el => {
    return el[0] === pl1 && el[1] === pl2
  }) ? 'Player 1 Won!' : 'Player 2 Won!';
};