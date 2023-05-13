// Digit*Digit
// https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num) {
  const finalInt = [];
  const numString = num.toString();

  for (let i = 0; i < numString.length; i++) {
    const tempNum = Number(numString[i]);
    const tempSquare = tempNum ** 2;
    finalInt.push(tempSquare.toString());
  }

  return Number(finalInt.join(""));
}
