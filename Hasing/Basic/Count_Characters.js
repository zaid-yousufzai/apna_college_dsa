function count(str, n) {
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    if (i > 0 && str[i] === str[i - 1]) {
      // consecutive, so skip
      continue;
    }

    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
    }
  }

  let count = 0;
  for (let [key, value] of map) {
    if (value === n) count++;
  }

  console.log(count);
}

count("geeksforgeeks", 2); // 4
count("abc", 1); // 3

// | Metric               | Value    |
// | -------------------- | -------- |
// | **Time Complexity**  | **O(n)** |
// | **Space Complexity** | **O(n)** |
