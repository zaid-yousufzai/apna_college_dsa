function repet(str) {
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
    }
  }
  // console.log(map);
  // 2. Iterate again to find FIRST character whose freq > 1
  for (let ch of str) {
    if (map.get(ch) > 1) return ch;
  }

  return -1;
}

console.log(repet("geeksforgeeks"));
console.log(repet("abcde"));

// ⏱ Time Complexity: O(n)
// 🗂 Space Complexity: O(n)
