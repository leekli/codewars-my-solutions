// Simple Pig Latin
// https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str) {
  const splitString = str.split(" ");
  const newStrArr = [];

  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i].match(/[A-Z]/gi)) {
      newStrArr.push(splitString[i].substring(1) + splitString[i][0] + "ay");
    } else {
      newStrArr.push(splitString[i]);
    }
  }

  return newStrArr.join(" ");
}
