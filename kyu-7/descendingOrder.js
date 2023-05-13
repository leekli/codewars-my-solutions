// Descending Order
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n) {
  const numToString = n
    .toString()
    .split("")
    .sort((a, b) => b - a);

  return Number(numToString.join(""));
}
