function minDiff(arr) {
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      min = Math.min(min, Math.abs(arr[i] - arr[j]));
    }
  }

  return min;
}

console.log(minDiff([2, 4, 5, 9, 7]));

// ⏳ Time Complexity: O(n²)
// 📦 Space Complexity: O(1)
