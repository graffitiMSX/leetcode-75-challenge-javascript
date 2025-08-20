/*

Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

Example 1:

Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]

Example 2:

Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2] 

Constraints:

n == grid.length == grid[i].length
1 <= n <= 200
1 <= grid[i][j] <= 10^5

*/

var equalPairs = function(grid) {
    const n = grid.length;
    const rowMap = new Map();
    
    for (let i = 0; i < n; i++) {
        const rowKey = grid[i].toString();
        rowMap.set(rowKey, (rowMap.get(rowKey) || 0) + 1);
    }
    
    let count = 0;
    
    for (let j = 0; j < n; j++) {
        const col = [];
        for (let i = 0; i < n; i++) {
            col.push(grid[i][j]);
        }
        
        const colKey = col.toString();
        if (rowMap.has(colKey)) {
            count += rowMap.get(colKey);
        }
    }
    
    return count;
};

const inputs = [
  [
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ],
  [
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2],
  ],
];

const outputs = [1, 3];

inputs.forEach((input, index) => {
    const result = equalPairs(input);
    console.log(
      `expected: ${outputs[index]}, received: ${result}, ${
        result === outputs[index] ? "✅" : "❌"
      }`
    );
  });
  