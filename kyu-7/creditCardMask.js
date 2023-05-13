// Credit Card Mask
// https://www.codewars.com/kata/5412509bd436bd33920011bc

function maskify(cc) {
  let newStr = "";

  for (let i = 0; i < cc.length; i++) {
    if (i < cc.length - 4) newStr += "#";
    else newStr += cc[i];
  }

  return newStr;
}
