// Moving Zeros To The End
// https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
  let zeroCount = 0;

  const newArr = arr.filter((e) => {
    if (e === 0) zeroCount++;
    return e !== 0;
  });

  for (let i = 0; i < zeroCount; i++) {
    newArr.push(0);
  }

  return newArr;
}
