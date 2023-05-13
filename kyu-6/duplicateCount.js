// Counting Duplicates
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text) {
  const lowerCaseText = text.toLowerCase();
  const totalCharCount = {};
  const duplicatesArr = [];

  for (let i = 0; i < lowerCaseText.length; i++) {
    totalCharCount.hasOwnProperty(lowerCaseText[i])
      ? (totalCharCount[lowerCaseText[i]] += 1)
      : (totalCharCount[lowerCaseText[i]] = 1);
  }

  for (let char in totalCharCount) {
    if (totalCharCount[char] > 1) {
      duplicatesArr.push(char);
    }
  }

  const uniqueDuplicatesSet = new Set(duplicatesArr);

  return uniqueDuplicatesSet.size;
}
