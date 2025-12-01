function firstOne(arr) {
  let start = 0;
  let end = arr.length - 1;
  let ans = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == 1) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return ans;
}

console.log(
  firstOne([0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
); // 6
console.log(firstOne([0, 0, 0, 0])); // -1

// | Approach                | Time         | Space    |
// | ----------------------- | ------------ | -------- |
// | Binary search (optimal) | **O(log n)** | **O(1)** |
