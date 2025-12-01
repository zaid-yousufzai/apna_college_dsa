function maxprod(a) {
  let p = 0; // start with 0 since all numbers are non-negative

  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      let temp = a[i] * a[j];
      p = Math.max(p, temp);
    }
  }

  return p;
}

console.log(maxprod([1, 4, 3, 6, 7, 0]));

// ⏳ Time Complexity:

// O(n²)

// 📦 Space Complexity:

// O(1)
