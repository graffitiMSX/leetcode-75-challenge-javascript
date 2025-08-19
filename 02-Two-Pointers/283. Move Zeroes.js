/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 10^4
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?
*/

var moveZeroes = function (nums) {
  let i = 0;
  let j = 1;
  while (i < nums.length - 1 && j <= nums.length - 1) {
    if (nums[i] === 0) {
      while (nums[j] === 0) {
        j++;
        if (j == nums.length) return;
      }
      nums[i] = nums[j];
      nums[j] = 0;
    }

    i++;
    j++;
  }
};

const inputs = [[0, 0], [0, 1, 0, 3, 12], [0]];
const outputs = [[0, 0], [1, 3, 12, 0, 0], [0]];

inputs.forEach((input, index) => {
  const before = JSON.stringify(input);
  moveZeroes(input);
  const after = JSON.stringify(input);
  const toCompare = JSON.stringify(outputs[index]);
  console.log(
    `Input = ${before} output = ${input} expected = ${outputs[index]} ${
      after === toCompare ? "✅" : "❌"
    }`
  );
});
