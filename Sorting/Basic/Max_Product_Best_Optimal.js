function maxprod(a) {
  let max1 = -1;
  let max2 = -1;

  for (let num of a) {
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
  }

  return max1 * max2;
}

console.log(maxprod([1, 4, 3, 6, 7, 0]));

// ⏳ Time: O(n)
// 📦 Space: O(1)
