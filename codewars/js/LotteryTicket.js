// https://www.codewars.com/kata/57f625992f4d53c24200070e

const bingo = (ticket, win) => {
  return ticket.reduce((count, [letters, charset]) => {
    return letters.includes(String.fromCharCode(charset)) ? count + 1 : count;
  }, 0) >= win ? "Winner!" : "Loser!";
};