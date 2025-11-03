// 11. Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

let a = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function water(a) {
  let area = 0;
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++) {
      let w = j - i;
      let h = Math.min(a[i], a[j]);
      area = Math.max(area, w * h);
    }
  }
  console.log(area);
}

water(a); // Output: 49

// 🕒 Time Complexity: O(n²)

// Because of the double loop.

// 💾 Space Complexity: O(1)
