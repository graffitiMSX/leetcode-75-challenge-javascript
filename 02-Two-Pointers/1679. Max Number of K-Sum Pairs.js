/*
You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.

 

Example 1:

Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.
Example 2:

Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.
 

Constraints:

1 <= nums.length <= 10^5
1 <= nums[i] <= 10^9
1 <= k <= 10^9
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let operations = 0;
  const remainingCounts = new Map();

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    const complement = k - value;
    const complementCount = remainingCounts.get(complement) || 0;

    if (complementCount > 0) {
      operations++;
      if (complementCount === 1) {
        remainingCounts.delete(complement);
      } else {
        remainingCounts.set(complement, complementCount - 1);
      }
    } else {
      remainingCounts.set(value, (remainingCounts.get(value) || 0) + 1);
    }
  }

  return operations;
};

// Alternative: two-pointer approach after sorting (O(n log n) time, O(1) extra space)
var maxOperationsTwoPointer = function (nums, k) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let operations = 0;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === k) {
      operations++;
      left++;
      right--;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }

  return operations;
};

// Basic tests
const inputs = [
  { nums: [1, 2, 3, 4], k: 5, expected: 2 },
  { nums: [3, 1, 3, 4, 3], k: 6, expected: 1 },
  { nums: [2, 2, 2, 3, 1, 1, 4, 0, 0], k: 4, expected: 3 },
  { nums: [1, 1, 1, 1], k: 2, expected: 2 },
  { nums: [1], k: 2, expected: 0 },
];

inputs.forEach((test, idx) => {
  const result1 = maxOperations([...test.nums], test.k);
  const result2 = maxOperationsTwoPointer([...test.nums], test.k);
  console.log(
    `Test ${idx + 1}: expected=${test.expected}, hash=${result1} ${
      result1 === test.expected ? "✅" : "❌"
    }, twoPtr=${result2} ${result2 === test.expected ? "✅" : "❌"}`
  );
});
