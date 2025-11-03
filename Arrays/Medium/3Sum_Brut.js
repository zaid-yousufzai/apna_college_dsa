// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

let a = [-1, 0, 1, 2, -1, -4];
function threesum(a) {
  let res = new Set();
  for (let i = 0; i < a.length - 2; i++) {
    for (let j = i + 1; j < a.length - 1; j++) {
      for (let k = j + 1; k < a.length; k++) {
        if (a[i] + a[j] + a[k] === 0) {
          let ar = [a[i], a[j], a[k]];
          ar.sort((a, b) => a - b);
          res.add(JSON.stringify(ar)); // better way to store unique triplets
        }
      }
    }
  }

  console.log(Array.from(res).map(JSON.parse));
  console.log(Array.from(res));
  
  console.log(res);
  
}

threesum(a);

// Time Complexity: O(n³)

// Space Complexity: O(n) (for storing results)
