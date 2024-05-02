// https://www.codewars.com/kata/5a28cf591f7f7019a80000de

const missing = (s) => {
  let start = 0;
  let size = 1;
  let end = start + size;
  let result = [];
  next:
    while (end < s.length) {
      const current = +s.substring(start, end);
      const next = +s.substring(end, end + size);
      if ((current + 2) === next) {
        result.push(+next - 1);
      } else if ((current + 1) !== next) {
        ++size;
        const next = s.substring(end, end + size);
        if (next - current === 2) {
          result.push(next - 1);
        } else if (next - current !== 1) {
          result = [];
          start = 0;
          end = start + size;
          continue next;
        }

      }
      start = end;
      end = end + size;
    }

  return result.length === 1 ? result[0] : -1;
};