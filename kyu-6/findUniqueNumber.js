// Find the unique number
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  const freqCount = {};

  arr.forEach((num) => {
    freqCount.hasOwnProperty(num)
      ? (freqCount[num] += 1)
      : (freqCount[num] = 1);
  });

  for (let num in freqCount) {
    if (freqCount[num] === 1) return Number(num);
  }
}
