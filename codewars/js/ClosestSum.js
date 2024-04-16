// https://www.codewars.com/kata/577e694af5db624cf30002d0
// TODO: иногда не все тесты проходит, ибо результирующая сумма может идти с другой стороны от целевого числа.

const closestSum = (arr, target) => {
  const sorted = [...arr].sort((a, b) => a - b);
  let result = sorted[0] + sorted[1] + sorted[2];
  let minDiff = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < sorted.length - 2; i++) {
    let left = i + 1;
    let right = sorted.length - 1;
    while (left < right) {
      const sum = sorted[i] + sorted[left] + sorted[right];
      if (sum === target) {
        return target;
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }

      const diff = Math.abs(sum - target);
      if (diff < minDiff) {
        result = sum;
        minDiff = diff;
      }
    }
  }

  return result;
};