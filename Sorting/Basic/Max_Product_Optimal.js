function maxprod(a) {
  a.sort((x, y) => x - y);
  let n = a.length;
  return a[n - 1] * a[n - 2];
}

console.log(maxprod([1, 4, 3, 6, 7, 0]));

// ⏳ Time Complexity:

// Sorting → O(n log n)

// 📦 Space Complexity:

// O(1) extra (ignoring sort)
