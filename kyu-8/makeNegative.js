// Return Negative
// https://www.codewars.com/kata/55685cd7ad70877c23000102

function makeNegative(num) {
  if (num === 0) return 0;
  if (num < 0) return num;
  if (num > 0) return -Math.abs(num);
}
