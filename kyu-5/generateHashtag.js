// The Hashtag Generator
// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str) {
  if (str.trim().length === 0) return false;

  const strSplitArr = str
    .trim()
    .split(" ")
    .map((word) => {
      const upperFirstChar = word.charAt(0).toUpperCase();
      const restWord = word.slice(1).toLowerCase();
      return upperFirstChar + restWord;
    });

  strSplitArr.unshift("#");

  const finalHashTag = strSplitArr.join("");

  return finalHashTag.length <= 140 ? finalHashTag : false;
}
