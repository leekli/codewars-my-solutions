// Decode the Morse code
// https://www.codewars.com/kata/54b724efac3d5402db00065e

decodeMorse = function (morseCode) {
  // You can use MORSE_CODE[morse]
  let finalStr = "";
  const splitCode = morseCode.split(" ");

  for (let code of splitCode) {
    code !== "" ? (finalStr += `${MORSE_CODE[code]}`) : (finalStr += ` `);
  }

  return finalStr.replace(/\s+/g, " ").trim();
};
