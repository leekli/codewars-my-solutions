// Exes and Ohs
// https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
  let xCount = 0,
    oCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      xCount++;
    }
    if (str[i].toLowerCase() === "o") {
      oCount++;
    }
  }

  return xCount === oCount;
}
