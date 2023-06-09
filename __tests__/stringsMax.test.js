const stringsMix = require("../kyu-4/stringsMax");

describe("stringsMix Tests", () => {
  test("should return a string", () => {
    expect(stringsMix("", "")).toBe("");
  });
  test("should not count a 1 character letter between a-z in the final count", () => {
    expect(stringsMix("a", "")).toBe("");
    expect(stringsMix("", "b")).toBe("");
    expect(stringsMix("a", "b")).toBe("");
  });
  test("should count the totals of 1 string which is more than 1 character long and return the final count of both strings input if true", () => {
    expect(stringsMix("aa", "")).toBe("1:aa");
    expect(stringsMix("", "bb")).toBe("2:bb");
  });
  test("should ignore the 1 letter character when given another string with a letter higher than 1", () => {
    expect(stringsMix("aa", "b")).toBe("1:aa");
    expect(stringsMix("b", "aa")).toBe("2:aa");
  });
  test('should replace the string number with a "=" before the ":" if both letters are the same size in both strings', () => {
    expect(stringsMix("aa", "aa")).toBe("=:aa");
    expect(stringsMix("bbb", "bbb")).toBe("=:bbb");
  });
  test("should give the total of all letters in both strings over 1 character long in order of frequency (highest first", () => {
    expect(stringsMix("aaa", "bb")).toBe("1:aaa/2:bb");
    expect(stringsMix("bb", "aaa")).toBe("2:aaa/1:bb");
  });
  test("should not count anything that is not a lower case letter between a-z", () => {
    expect(stringsMix("aaa b", "aa b")).toBe("1:aaa");
    expect(stringsMix("AA", "BBB")).toBe("");
    expect(stringsMix("a % $ CCCC b", "a _ * bbbb Z")).toBe("2:bbbb");
    expect(
      stringsMix("aaa %^&%%&* 72 z $ CCCC b", "a &^%*_ AA 9 * bbbb Z")
    ).toBe("2:bbbb/1:aaa");
    expect(
      stringsMix("aaa %^&%%&* 72 dd z $ CCCC b", "a &^%*_ AA dd 9 * bbbb Z")
    ).toBe("2:bbbb/1:aaa/=:dd");
  });
  test("should return any same length substrings sorted by codepoint", () => {
    expect(stringsMix("aa", "bb")).toBe("1:aa/2:bb");
    expect(stringsMix("a", "ii rr")).toBe("2:ii/2:rr");
    expect(stringsMix("a", "rr ii")).toBe("2:ii/2:rr");
    expect(stringsMix("ee ss", "ff rr dd ss ee")).toBe(
      "2:dd/2:ff/2:rr/=:ee/=:ss"
    );
  });
  test("should now test all the codewars examples from the instructions", () => {
    expect(stringsMix("A aaaa bb c", "& aaa bbb c d")).toBe("1:aaaa/2:bbb");

    let example1String = "my&friend&Paul has heavy hats! &";
    let example2String = "my friend John has many many friends &";
    let exampleCount =
      "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss";
    expect(stringsMix(example1String, example2String)).toBe(exampleCount);

    example1String = "mmmmm m nnnnn y&friend&Paul has heavy hats! &";
    example2String = "my frie n d Joh n has ma n y ma n y frie n ds n&";
    exampleCount =
      "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss";
    expect(stringsMix(example1String, example2String)).toBe(exampleCount);
  });
});
