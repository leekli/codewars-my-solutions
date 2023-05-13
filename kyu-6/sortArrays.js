// Sort the odd
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
  const oddArr = [];
  const evenArr = [];
  const result = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 0) {
      evenArr.push(array[i]);
    } else {
      oddArr.push(array[i]);
    }
  }
  oddArr.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 0) {
      result.push(evenArr.shift());
    } else {
      result.push(oddArr.shift());
    }
  }
  return result;
}
