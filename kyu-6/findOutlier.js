// Find The Parity Outlier
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers) {
  const evensArray = [],
    oddsArray = [];

  integers.forEach((num) => {
    num % 2 === 0 ? evensArray.push(num) : oddsArray.push(num);
  });

  return evensArray.length === 1 ? evensArray[0] : oddsArray[0];
}
