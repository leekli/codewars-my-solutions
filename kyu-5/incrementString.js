// String incrementer
// https://www.codewars.com/kata/54a91a4883a7de5d7800009c

function incrementString(str) {
  const numsMatch = str.match(/(\d+)$/);

  if (numsMatch) {
    const increasedNum = parseInt(numsMatch[0], 10) + 1;
    const stringStart = str.slice(0, numsMatch.index);
    const finalStr = increasedNum.toString().padStart(numsMatch[0].length, "0");
    return stringStart + finalStr;
  } else {
    return str + "1";
  }
}
