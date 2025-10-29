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
console.log(trapBruteForce([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6
