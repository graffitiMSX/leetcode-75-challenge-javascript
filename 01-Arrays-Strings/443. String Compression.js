/*

Given an array of characters `chars`, compress it using the following algorithm:

- Begin with an empty string `s`. For each group of consecutive repeating characters in `chars`:
  - If the group's length is 1, append the character to `s`.
  - Otherwise, append the character followed by the group's length.

The compressed string `s` should not be returned separately, but instead be stored in the input character array `chars`.
Note that group lengths that are 10 or longer will be split into multiple characters in `chars`.

After you are done modifying the input array, return the new length of the array.

Examples:
Input: ["a","a","b","b","c","c","c"] -> Output length 6, array becomes ["a","2","b","2","c","3"]
Input: ["a"] -> Output length 1, array becomes ["a"]

Constraints:
- 1 <= chars.length <= 2000
- chars[i] is a lowercase English letter, uppercase English letter, digit, or symbol.

*/

var compress = function (chars) {
  let write = 0;
  let read = 0;
  const n = chars.length;

  while (read < n) {
    const currentChar = chars[read];
    let count = 0;

    while (read < n && chars[read] === currentChar) {
      read++;
      count++;
    }

    chars[write] = currentChar;
    write++;

    if (count > 1) {
      const digits = String(count);
      for (let d = 0; d < digits.length; d++) {
        chars[write] = digits[d];
        write++;
      }
    }
  }

  return write;
};

const inputs = [
  ["a", "a", "b", "b", "c", "c", "c"],
  ["a"],
  ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
];

const outputs = [["a", "2", "b", "2", "c", "3"], ["a"], ["a", "b", "1", "2"]];

inputs.forEach((input, index) => {
  const len = compress(input);
  const mutated = input.slice(0, len);
  const expected = outputs[index];
  const ok = JSON.stringify(mutated) === JSON.stringify(expected);
  console.log(`len=${len}`, mutated, ok ? '✅' : '❌');
});
