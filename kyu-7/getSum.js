// Beginner Series #3 Sum of Numbers
// https://www.codewars.com/kata/55f2b110f61eb01779000053

function getSum(a, b) {
  let max = Math.max(a, b);
  let current = Math.min(a, b);
  let sum = 0;

  while (current <= max) {
    sum += current++;
  }
  return a === b ? a : sum;
}
