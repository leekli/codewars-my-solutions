// Unique In Order
// https://www.codewars.com/kata/54e6533c92449cc251001667

var uniqueInOrder = function (iterable) {
  const newOrderedArray = [];
  let previousValue = null;

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== previousValue) newOrderedArray.push(iterable[i]);

    previousValue = iterable[i];
  }

  return newOrderedArray;
};
