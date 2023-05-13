// Persistent Bugger.
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
  let i = 0;
  while (num.toString().length !== 1) {
    num = num
      .toString()
      .split("")
      .reduce((a, b) => a * b);
    i++;
  }
  return i;
}
