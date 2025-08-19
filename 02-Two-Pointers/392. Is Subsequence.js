/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some
(can be none) of the characters without disturbing the relative positions of the remaining characters.
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 

Constraints:

0 <= s.length <= 100
0 <= t.length <= 10^4
s and t consist only of lowercase English letters.
 

Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 10^9,
and you want to check one by one to see if t has its subsequence. In this scenario,
how would you change your code?
*/

var isSubsequence = function (s, t) {
  if (s.length === 0) return true;
  if (t.length === 0) return false;
  let i = 0;
  let j = 0;
  while (j < t.length && i < s.length) {
    if (t[j] === s[i]) {
      i++;
      if (i === s.length) return true;
    }
    j++;
  }
  return false;
};

const inputs = [
  ["abc", "ahbgdc"],
  ["axc", "ahbgdc"],
  ["", "ahbgdc"],
  ["abc", ""],
];

const outputs = [true, false, true, false];

inputs.forEach((input, index) => {
  console.log(`testing ${input[0]}, ${input[1]}`);
  const result = isSubsequence(input[0], input[1]);
  console.log(
    `expected = ${outputs[index]}, received: ${result} ${
      result === outputs[index] ? "✅" : "❌"
    }`
  );
});
