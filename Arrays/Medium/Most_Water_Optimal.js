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
  let ans = 0;
  let i = 0;
  let j = a.length - 1;

  while (i < j) {
    let w = j - i;
    let h = Math.min(a[i], a[j]);
    let area = w * h;
    ans = Math.max(ans, area);

    // Move the smaller height pointer inward
    if (a[i] < a[j]) {
      i++;
    } else {
      j--;
    }
  }

  console.log(ans);
}

water(a); // Output: 49

// 🕒 Time Complexity: O(n)

// Each element is visited at most once.

// 💾 Space Complexity: O(1)
