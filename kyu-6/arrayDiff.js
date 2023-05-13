// Array.diff
// https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
  const newArr = [];

  a.forEach((e) => {
    if (!b.includes(e)) newArr.push(e);
  });

  return newArr;
}
