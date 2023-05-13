// Complementary DNA
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

function DNAStrand(dna) {
  const dnaPairs = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };

  const dnaReturn = [];

  for (let el of dna) {
    dnaReturn.push(dnaPairs[el]);
  }

  return dnaReturn.join("");
}
