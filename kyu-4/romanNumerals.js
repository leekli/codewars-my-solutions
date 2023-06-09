function toRoman(num) {
  const romanNumberalLookup = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  if (Object.keys(romanNumberalLookup).includes(String(num)))
    return romanNumberalLookup[String(num)];

  let finalRomanNumeral = "";

  for (let i of Object.keys(romanNumberalLookup).reverse()) {
    let temp = Math.floor(num / i);
    num -= temp * i;
    finalRomanNumeral += romanNumberalLookup[i].repeat(temp);
  }

  return finalRomanNumeral;
}

function fromRoman(str) {
  const romanNumberalLookup = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let finalRomanNumeral = 0;

  const numeralsArray = Object.keys(romanNumberalLookup);

  for (let i = 0; i < str.length; i++) {
    if (numeralsArray.includes(str[i] + str[i + 1])) {
      finalRomanNumeral += romanNumberalLookup[str[i] + str[i + 1]];
      i++;
    } else if (numeralsArray.includes(str[i])) {
      finalRomanNumeral += romanNumberalLookup[str[i]];
    }
  }

  return finalRomanNumeral;
}

console.log(fromRoman("XXI")); // 21
console.log(fromRoman("I")); // 1
console.log(fromRoman("IV")); // 4
console.log(fromRoman("XXXVI")); // 36
console.log(fromRoman("MDCLXVI")); // 1666
console.log(fromRoman("MCMXCVI")); // 1996
console.log(fromRoman("MMVIII")); // 2008
console.log(fromRoman("MMXII")); // 2012
