/*

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 

Constraints:

1 <= flowerbed.length <= 2 * 1e4
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length

*/

var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) return true;
  let str = "0" + flowerbed.join("") + "0";
  let count = n;
  let start = 0;
  for (let i = 0; i < n; i++) {
    const pos = str.indexOf("000", start);
    if (pos === -1) return false;
    start = pos + 2;
    count--;
    if (count === 0) return true;
  }
  return false;
};

const inputs = [
  { flowerbed: [1, 0, 0, 0, 1], n: 1 },
  { flowerbed: [1, 0, 0, 0, 1], n: 2 },
  { flowerbed: [1, 0, 0, 0, 1, 0, 0], n: 2 },
];
const outputs = [true, false, true];

inputs.forEach((input, index) => {
  console.log(`testing ${input.flowerbed}, ${input.n}`);
  const result = canPlaceFlowers(input.flowerbed, input.n);
  console.log(
    `expected = ${outputs[index]}, received: ${result} ${
      result === outputs[index] ? "✅" : "❌"
    }`
  );
});
