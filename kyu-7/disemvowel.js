// Disemvowel Trolls
// https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i].toLowerCase())) {
      newStr += str[i];
    }
  }

  return newStr;
}
