/*

Given a binary array nums, you should delete exactly one element from it.
Return the size of the longest non-empty subarray containing only 1's in the result.

If there is no such subarray, return 0.

Notes:
- You must delete exactly one element. If the array consists of all 1's, the answer is nums.length - 1.

Examples:
Input: nums = [1,1,0,1]
Output: 3
Explanation: Delete the 0 and the longest subarray of 1's is [1,1,1].

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: Delete one 0 to get the longest run of 1's.

Constraints:
- 1 <= nums.length <= 10^5
- nums[i] is either 0 or 1

*/

var longestSubarray = function (nums) {
  if (nums.indexOf(0) === -1) return nums.length - 1
  let left = 0;
  let zeros = 0;
  let best = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeros++;

    while (zeros > 1) {
      if (nums[left] === 0) zeros--;
      left++;
    }

    if (right - left > best) best = right - left;
  }

  return best;
};

const inputs = [
  [1, 1, 0, 1],
  [0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];
const outputs = [3, 5, 2, 0];

inputs.forEach((nums, i) => {
  const result = longestSubarray(nums);
  console.log(
    `expected: ${outputs[i]}, received: ${result} ${
      outputs[i] === result ? "✅" : "❌"
    }`
  );
});
