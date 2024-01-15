// https://www.codewars.com/kata/5574835e3e404a0bed00001b

const getParticipants = (handshakes) => {
  let countryman = 0;
  while (handshakes > (countryman * (countryman - 1)) / 2) {
    countryman++;
  }

  return countryman;
};