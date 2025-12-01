function containsRange(A, B, arr) {
  let set = new Set(arr);

  for (let i = A; i <= B; i++) {
    if (!set.has(i)) {
      return false;
    }
  }
  return true;
}
console.log(containsRange(2, 5, [1, 4, 5, 2, 7, 8, 3])); // true
console.log(containsRange(2, 6, [1, 4, 5, 2, 7, 8, 3])); // false

// | Approach      | Time           | Space |
// | ------------- | -------------- | ----- |
// | Optimal (Set) | O(n + (B−A))   | O(n)  |
