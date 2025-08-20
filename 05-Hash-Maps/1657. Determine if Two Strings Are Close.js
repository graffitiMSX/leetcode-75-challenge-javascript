/*

Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

 

Example 1:

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"
Example 2:

Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
Example 3:

Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"
 

Constraints:

1 <= word1.length, word2.length <= 10^5
word1 and word2 contain only lowercase English letters.

*/

var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;

  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < word1.length; i++) {
    map1.set(word1[i], (map1.get(word1[i]) || 0) + 1);
    map2.set(word2[i], (map2.get(word2[i]) || 0) + 1);
  }

  if (map1.size !== map2.size) return false;
  for (const char of map1.keys()) {
    if (!map2.has(char)) return false;
  }

  const freq1 = Array.from(map1.values()).sort((a, b) => a - b);
  const freq2 = Array.from(map2.values()).sort((a, b) => a - b);

  return JSON.stringify(freq1) === JSON.stringify(freq2);
};

const inputs = [
  {
    word1: "abc",
    word2: "bca",
  },
  {
    word1: "a",
    word2: "aa",
  },
  {
    word1: "cabbba",
    word2: "abbccc",
  },
];

const outputs = [true, false, true];

inputs.forEach((input, index) => {
  const result = closeStrings(input.word1, input.word2);
  console.log(
    `expected: ${outputs[index]}, received: ${result}, ${
      result === outputs[index] ? "✅" : "❌"
    }`
  );
});
