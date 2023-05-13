// Sum of positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  let sum = 0;

  if (arr.length === 0) return sum;

  arr.forEach((num) => {
    if (num > 0) {
      sum += num;
    }
  });

  return sum;
}
