// Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers) {
  const numbersArraySorted = numbers
    .split(" ")
    .map((num) => Number(num))
    .sort((a, b) => a - b);
  const minAndMaxArray = [];

  console.log(numbersArraySorted);

  minAndMaxArray.push(
    numbersArraySorted[numbersArraySorted.length - 1],
    numbersArraySorted[0]
  );

  return minAndMaxArray.join(" ");
}
