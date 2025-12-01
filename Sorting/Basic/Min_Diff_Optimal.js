function minDiff(arr) {
  arr.sort((a, b) => a - b);

  let min = Infinity;
  for (let i = 1; i < arr.length; i++) {
    min = Math.min(min, arr[i] - arr[i - 1]);
  }
  return min;
}

console.log(minDiff([2, 4, 5, 9, 7]));

// ⏳ Time Complexity: O(n log n)
// 📦 Space Complexity: O(1) (if using in-place sort)
