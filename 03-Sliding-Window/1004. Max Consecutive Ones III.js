/*

Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

Constraints:

1 <= nums.length <= 10^5
nums[i] is either 0 or 1.
0 <= k <= nums.length

*/

var longestOnes = function(nums, k) {
    let left = 0;
    let zerosInWindow = 0;
    let best = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zerosInWindow++;

        while (zerosInWindow > k) {
            if (nums[left] === 0) zerosInWindow--;
            left++;
        }

        const windowLength = right - left + 1;
        if (windowLength > best) best = windowLength;
    }

    return best;
};

const inputs = [
    {
        nums: [1,1,1,0,0,0,1,1,1,1,0], k: 2
    },
    {
        nums: [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k: 3
    },
  ];
  
  const outputs = [6, 10];
  
  inputs.forEach((input, index) => {
    const result = longestOnes(input.nums, input.k);
    console.log(
      `expected: ${outputs[index]}, received: ${result} ${
        outputs[index] === result ? "✅" : "❌"
      }`
    );
  });
  