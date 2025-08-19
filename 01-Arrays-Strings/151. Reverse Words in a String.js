/*

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.

Examples:
Input: "a good   example" -> Output: "example good a"

Constraints:
- 1 <= s.length <= 10^4
- s contains English letters, digits, and spaces ' '
- There is at least one word in s

*/

var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
};

const inputs = [
    "a good   example",
    "  hello   world  ",
    "the sky is blue"
];

const outputs = [
    "example good a",
    "world hello",
    "blue is the sky"
];

inputs.forEach((input, index) => {
    const result = reverseWords(input);
    console.log(
        `expected = ${outputs[index]}, received: ${result} ${
            result === outputs[index] ? '✅' : '❌'
        }`
    );
});

