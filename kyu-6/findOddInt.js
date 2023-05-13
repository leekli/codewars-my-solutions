// Find the odd int
// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  const numFreq = {};
  let oddFound = 0;

  A.forEach((num) => {
    numFreq.hasOwnProperty(num) ? (numFreq[num] += 1) : (numFreq[num] = 1);
  });

  for (let num in numFreq) {
    if (numFreq[num] % 2 === 1) oddFound = Number(num);
  }

  return oddFound;
}
