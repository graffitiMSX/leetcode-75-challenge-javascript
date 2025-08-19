/*

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Examples:
Input: [1,2,3,4] -> Output: [24,12,8,6]
Input: [-1,1,0,-3,3] -> Output: [0,0,9,0,0]

Constraints:
- 2 <= nums.length <= 10^5
- -30 <= nums[i] <= 30
- The product of any prefix or suffix of nums fits in a 32-bit integer

*/

var productExceptSelf = function(nums) {
    const n = nums.length;
    const result = new Array(n);
    
    result[0] = 1;
    for (let i = 1; i < n; i++) {
        result[i] = result[i-1] * nums[i-1];
    }
    
    let suffix = 1;
    for (let i = n-1; i >= 0; i--) {
        result[i] = result[i] * suffix;
        suffix *= nums[i];
    }
    
    return result;
};

const inputs = [[1,2,3,4], [-1,1,0,-3,3]]
const outputs = [[24,12,8,6], [0,0,9,0,0]]

inputs.forEach((input, index) => {
    const result = productExceptSelf(input)
    const ok2 = JSON.stringify(result) === JSON.stringify(outputs[index])
    console.log(`Method2 expected = [${outputs[index]}], received: [${result}] ${ok2 ? '✅' : '❌'}`)
})