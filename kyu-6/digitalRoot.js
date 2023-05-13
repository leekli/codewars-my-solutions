// Sum of Digits / Digital Root
// https://www.codewars.com/kata/541c8630095125aba6000c00

function digitalRoot(n) {
  const digits = String(n).match(/\d/g);
  let total = 0;
  digits.forEach((digit) => (total += Number(digit)));

  if (total.toString().length !== 1) return digitalRoot(total);

  return total;
}
