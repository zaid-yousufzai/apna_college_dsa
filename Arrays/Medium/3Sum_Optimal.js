// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

let a = [-1, 0, 1, 2, -1, -4];
function threesum(a) {
  let res = [];
  a.sort((a, b) => a - b);

  for (let i = 0; i < a.length - 2; i++) {
    if (i > 0 && a[i] === a[i - 1]) continue; // skip duplicates

    let j = i + 1;
    let k = a.length - 1;

    while (j < k) {
      let sum = a[i] + a[j] + a[k];

      if (sum === 0) {
        res.push([a[i], a[j], a[k]]);
        j++;
        k--;

        while (j < k && a[j] === a[j - 1]) j++; // skip duplicates
        while (j < k && a[k] === a[k + 1]) k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }

  console.log(res);
}

threesum(a);

// Time Complexity: O(n²)

// Space Complexity: O(1) (ignoring output)
