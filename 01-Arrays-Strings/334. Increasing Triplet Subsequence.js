/*

Given an integer array nums, return true if there exists a triple of indices (i, j, k)
such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exist, return false.

You must solve it in O(n) time and O(1) space.

Examples:
Input: [1,2,3,4,5] -> true
Input: [5,4,3,2,1] -> false
Input: [2,1,5,0,4,6] -> true

Constraints:
- 1 <= nums.length <= 5 * 10^5
- -2^31 <= nums[i] <= 2^31 - 1

*/

// Method 1: Greedy approach with two variables - O(n) time, O(1) space
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;
    
    for (let num of nums) {
        if (num <= first) {
            first = num;
        } else if (num <= second) {
            second = num;
        } else {
            return true;
        }
    }
    
    return false;
};

// Method 2: More explicit approach for better understanding
var increasingTripletExplicit = function(nums) {
    if (nums.length < 3) return false;
    
    let min1 = nums[0]; 
    let min2 = Infinity;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > min2) {
            return true;
        } else if (nums[i] > min1 && nums[i] < min2) {
            min2 = nums[i];
        } else if (nums[i] < min1) {
            min1 = nums[i];
        }
    }
    
    return false;
};

const inputs = [[1,2,3,4,5], [5,4,3,2,1], [2,1,5,0,4,6], [20,100,10,12,5,13]]
const outputs = [true, false, true, true]

inputs.forEach((input, index) => {
    const result = increasingTripletExplicit(input)
    console.log(`expected = ${outputs[index]}, received: ${result} ${result === outputs[index] ? '✅' : '❌'}`)
})
