// Shortest Word
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s) {
  const splitStrSorted = s.split(" ").sort((a, b) => a.length - b.length);

  return splitStrSorted[0].length;
}
