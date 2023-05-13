// Two to One
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

function longest(s1, s2) {
  const combinedStr = s1 + s2;
  const strArrSetSorted = Array.from(new Set(combinedStr)).sort().join("");

  return strArrSetSorted;
}
