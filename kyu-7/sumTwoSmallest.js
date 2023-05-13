// Sum of two lowest positive integers
// https://www.codewars.com/kata/558fc85d8fd1938afb000014

function sumTwoSmallestNumbers(numbers) {
  const numsArrSorted = numbers.sort((a, b) => a - b);
  const total = numsArrSorted[0] + numsArrSorted[1];

  return total;
}
