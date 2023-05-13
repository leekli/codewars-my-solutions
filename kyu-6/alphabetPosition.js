// Replace With Alphabet Position
// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let finalStrArr = [];

  for (let char of text.toLowerCase()) {
    if (/[a-z]/g.test(char)) finalStrArr.push(alphabet.indexOf(char) + 1);
  }

  return finalStrArr.join(" ");
}
