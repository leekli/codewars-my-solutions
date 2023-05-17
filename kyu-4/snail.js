// Snail
// https://www.codewars.com/kata/snail

const fbf = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];

const fbfFour = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

function snail(arr) {
  const arrangedArr = [];

  while (arr.length > 0) {
    // Remove top row first
    arrangedArr.push(...arr.shift());

    // Remove each element at the end of each row next
    for (let i = 0; i < arr.length; i++) {
      arrangedArr.push(arr[i].pop());
    }

    // Remove each element from bottom row
    if (arr.length > 0) {
      arrangedArr.push(...arr.pop().reverse());
    }

    // Remove any element at the start of each row
    for (let i = arr.length - 1; i >= 0; i--) {
      arrangedArr.push(arr[i].shift());
    }

    // Go round again if array length is still above 0
  }
}

snail(fbf); // [1,2,3,4,5,6,7,8,9]
snail(fbfFour); // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
