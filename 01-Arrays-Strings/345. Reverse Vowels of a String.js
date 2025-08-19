/*

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Examples:
Input: "IceCreAm" -> Output: "AceCreIm"

Constraints:
- 1 <= s.length <= 3 * 10^5
- s consist of printable ASCII characters.

*/

var reverseVowels = function(s) {
    let x = s.split('')
    const vowels = "aAeEiIoOuU".split('')
    const positions = []
    for(let i = 0; i< s.length; i++){
        if(vowels.includes(s[i])){
            positions.push(i)
        }        
    }
    for(let i = 0; i < positions.length / 2; i++){
        const [a,b] = [x[positions[positions.length-i-1]], x[positions[i]]]
        x[positions[i]] = a
        x[positions[positions.length-i-1]] = b
    }
    return x.join('')
};

const inputs = [
  "IceCreAm",
  "hello",
  "leetcode",
];

const outputs = [
  "AceCreIm",
  "holle",
  "leotcede",
];

inputs.forEach((input, index) => {
  const result = reverseVowels(input);
  const ok = result === outputs[index];
  console.log(`expected = ${outputs[index]}, received: ${result} ${ok ? '✅' : '❌'}`);
});

