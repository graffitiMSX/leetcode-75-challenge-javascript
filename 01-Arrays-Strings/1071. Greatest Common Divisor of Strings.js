/*
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 

Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.
*/

var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 != str2 + str1) return "";
  const a = str1.length;
  const b = str2.length;
  const smaller = Math.min(a, b);
  let gcd = 1;
  for (let i = 1; i <= smaller; i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  return str1.slice(0, gcd);
};

const inputs = [
  ["ABCABC", "ABC"],
  ["ABABAB", "ABAB"],
  ["LEET", "CODE"],
];
const outputs = ["ABC", "AB", ""];

inputs.forEach((input, i) => {
  const result = gcdOfStrings(input[0], input[1]);
  console.log(
    `expected: ${outputs[i]}, received: ${result} ${
      outputs[i] === result ? "✅" : "❌"
    }`
  );
});
