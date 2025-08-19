/*

1732. Find the Highest Altitude

There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes.
The biker starts his trip on point 0 with altitude 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i and i + 1
for all (0 <= i < n). Return the highest altitude of a point.

Examples:
Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

Input: gain = [-4,-3,-2,-1,4,3,2]
Output: 0
Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

Constraints:
- 1 <= gain.length <= 100
- -100 <= gain[i] <= 100

*/

var largestAltitude = function(gain) {
  let peak = 0;
  let actual = 0;
  for(let i = 0; i< gain.length; i++){
    actual += gain[i]
    if (actual > peak) peak = actual
  }
  return peak;
};

 const inputs = [
   [-5,1,5,0,-7],
   [-4,-3,-2,-1,4,3,2]
 ];
 const outputs = [1, 0];

 inputs.forEach((gain, i) => {
   const result = largestAltitude(gain);
   console.log(
    `expected: ${outputs[i]}, received: ${result} ${
      outputs[i] === result ? "✅" : "❌"
    }`
  );
 });


