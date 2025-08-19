/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

 

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
 

Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.
*/

var mergeAlternately = function (word1, word2) {
  const result = [];
  const max = Math.max(word1.length, word2.length);
  for (let i = 0; i < max; i++) {
    if (i < word1.length) {
      result.push(word1[i]);
    }
    if (i < word2.length) {
      result.push(word2[i]);
    }
  }
  return result.join("");
};

const inputs = [
  ["abc", "pqr"],
  ["ab", "pqrs"],
  ["abcd", "pq"]
];
const outputs = ["apbqcr", "apbqrs", "apbqcd"];

inputs.forEach((input, i) => {
  const result = mergeAlternately(input[0], input[1]);
  console.log(
    `expected: ${outputs[i]}, received: ${result} ${
      outputs[i] === result ? "✅" : "❌"
    }`
  );
});
