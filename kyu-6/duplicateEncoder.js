// Duplicate Encoder
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word) {
  const charFreqCount = {};
  let finalStr = "";

  for (let char of word.toLowerCase()) {
    charFreqCount.hasOwnProperty(char)
      ? (charFreqCount[char] += 1)
      : (charFreqCount[char] = 1);
  }

  for (let char of word.toLowerCase()) {
    charFreqCount[char] === 1 ? (finalStr += "(") : (finalStr += ")");
  }

  return finalStr;
}
