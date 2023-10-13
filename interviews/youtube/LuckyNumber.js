// https://www.youtube.com/watch?v=8Xuftz2IiAI
// timeline position 00:52:59 Задача про счастливые числа

// Найти счастливое число. Счастливым число называется то число в котором цифра соответствует колоичеству одноименных цифр.
// Если несколько счастливых чисел, то вернуть максимальное счастливое число. В противном случае вернуть 0.
// Цифры могут быть от 1 до 9.

const lucky = (string) => {
  const digits = string.toString().split("").map(Number);
  let lucky = 0;
  if (!digits.includes(0)) {
    const map = new Map();
    digits.forEach(digit => map.set(digit, map.has(digit) ? map.get(digit) + 1 : 1));
    map.forEach((digit, amount) => {
      if (digit === amount && lucky < digit) {
        lucky = digit;
      }
    });
  }

  return lucky;
};