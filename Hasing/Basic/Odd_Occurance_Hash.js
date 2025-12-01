function odd(a) {
  let map = new Map();

  for (let i = 0; i < a.length; i++) {
    if (map.has(a[i])) {
      map.set(a[i], map.get(a[i]) + 1);
    } else {
      map.set(a[i], 1);
    }
  }

  for (let [key, value] of map) {
    if (value % 2 !== 0) {
      return key;
    }
  }
}

console.log(odd([1, 2, 3, 2, 3, 1, 3])); // 3

// ⏱ Time Complexity: O(n)

// One loop to count → O(n)

// One loop to find odd count → O(n)

// Still → O(n)

// 📦 Space Complexity: O(n)

// HashMap stores counts for each distinct element.
