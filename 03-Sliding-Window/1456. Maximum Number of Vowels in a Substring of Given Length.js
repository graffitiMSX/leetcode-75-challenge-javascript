/*

Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
 

Constraints:

1 <= s.length <= 10^5
s consists of lowercase English letters.
1 <= k <= s.length

*/

var maxVowels = function (s, k) {
  let max = 0;
  let vowels = "aeiou";
  let sum = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.indexOf(s[i]) >= 0) sum++;
  }
  max = sum;
  for (let i = k; i < s.length; i++) {
    if (vowels.indexOf(s[i - k]) >= 0) sum--;
    if (vowels.indexOf(s[i]) >= 0) sum++;
    
    if (sum === k) return k
    if (sum > max) max = sum
  }
  return max;
};

const inputs = [
  {
    s: "abciiidef",
    k: 3,
  },
  {
    s: "aeiou",
    k: 2,
  },
  {
    s: "leetcode",
    k: 3,
  },
];

const outputs = [3, 2, 2];

inputs.forEach((input, index) => {
  const result = maxVowels(input.s, input.k);
  console.log(
    `expected: ${outputs[index]}, received: ${result} ${
      outputs[index] === result ? "✅" : "❌"
    }`
  );
});
