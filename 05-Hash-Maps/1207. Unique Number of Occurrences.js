/*

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
 

Constraints:

1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000

*/

var uniqueOccurrences = function (arr) {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) hash[arr[i]] = 1;
    else hash[arr[i]]++;
  }
  const values = Object.values(hash);
  const unique = new Set(values);
  return unique.size === values.length;
};

const inputs = [
  [1, 2, 2, 1, 1, 3],
  [1, 2],
  [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0],
  [
    -130, 21, -154, 159, -44, -126, 165, 68, -126, -126, -126, 128, -94, 165,
    -30, -44, -39, -94, 21, -130, 68, 68, 128, -130, -39, 181, 68, 68, 68, 139,
    139, -39, 21, 21, -39, 68, 128, 131, -126, -154, -30, 165, 21, 159, 181,
    -39, -126, 131, -94, -44, 131, 128, 21, -44, 128, -94, 183, -94, 131, 139,
    -44, 128, 21, 181, -44, 131, 128, 131, 21, 68, 181, -44, -126, -130, 131,
    -190, 131, 181, 165, -94, 165, 165, -30, -154, 68, -39, -44, 165, -39, -126,
    68, 68, -130, 68, -94, 181, -44, 131, 21, 183, -44, 21, -39, -130, -39, 131,
    21, 165, 165, -126, 165, -44, -94, 68, 68, -94, -126, -126, -30, 181, 165,
    68, -44, -39, -94, -126, -126, -30, 68, 181, -44, -94, -126, -44, -94, -30,
    131, 165, -190, -130, -94, -94, 181, 128, 181, 181, 181, 139, -130, -94,
    -130, -130, 139, -130, -90, -154, 181, 165, -30, -154, 165, -190, 159, 165,
    139, -126, -44, 131, -44, -190, -126, -130, -94, 128, -154, 68, -130, -130,
    68, 21, -44, -30, -126, -126, 131, 159, -190, -126, 181, 139,
  ],
];

const outputs = [true, false, true, false];

inputs.forEach((input, index) => {
  const result = uniqueOccurrences(input);
  console.log(
    `expected: ${outputs[index]}, received: ${result}, ${
      result === outputs[index] ? "✅" : "❌"
    }`
  );
});
