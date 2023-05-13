// Rot13 Cipher
// https://www.codewars.com/kata/530e15517bc88ac656000716

function rot13(str) {
  const alphabetList = "abcdefghijklmnopqrstuvwxyz";
  let encodedString = "";

  for (let i = 0; i < str.length; i++) {
    const isValidLetter = /[a-zA-Z]/g.test(str[i]);
    const isUpperCase = str[i] == str[i].toUpperCase();

    if (isValidLetter) {
      const currentCharLowerCase = str[i].toLowerCase();
      const charAlphabetIndex = alphabetList.indexOf(currentCharLowerCase);

      let shiftedIndex = (charAlphabetIndex + 13) % 26;
      if (shiftedIndex < 0) shiftedIndex += 26;

      let newCharacter = alphabetList[shiftedIndex];
      if (isUpperCase) newCharacter = newCharacter.toUpperCase();

      encodedString += newCharacter;
    } else {
      encodedString += str[i];
    }
  }
  return encodedString;
}
