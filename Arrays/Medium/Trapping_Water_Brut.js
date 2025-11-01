// Trapping Rain Water

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

function trapBruteForce(height) {
  let n = height.length;
  let totalWater = 0;

  for (let i = 0; i < n; i++) {
    let leftMax = 0;
    for (let j = 0; j <= i; j++) {
      leftMax = Math.max(leftMax, height[j]);
    }

    let rightMax = 0;
    for (let j = i; j < n; j++) {
      rightMax = Math.max(rightMax, height[j]);
    }

    totalWater += Math.min(leftMax, rightMax) - height[i];
  }

  return totalWater;
}

// Example
console.log(trapBruteForce([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6

// Time   O(n²) → two nested loops
// Space  O(1)
