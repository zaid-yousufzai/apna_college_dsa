function findSmall(a) {
  // Step 1: Sort array (O(n log n))
  a.sort((x, y) => x - y);

  // Step 2: Take all except last 2 elements
  let res = [];
  for (let i = 0; i < a.length - 2; i++) {
    res.push(a[i]);
  }

  return res;
}

console.log(findSmall([2, 8, 7, 1, 5])); // [1, 2, 5]
console.log(findSmall([7, -2, 3, 4, 9, -1])); // [-2, -1, 3, 4]

// Time Complexity: O(n log n)

// → because of sorting

// Space Complexity: O(n)

// → because we create a result array that stores n-2 elements
