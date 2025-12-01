function canBePalindromeBrute(str) {
  let map = new Map();

  for (let i of str) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }

  let count = 0;
  for (let [key, value] of map) {
    if (value % 2 !== 0) {
      count++;
    }
  }

  if (count > 1) {
    return false;
  }
  return true;
}

console.log(canBePalindromeBrute("geeksogeeks")); // 1
console.log(canBePalindromeBrute("geeksforgeeks")); // 0

// ⏳ Time Complexity: O(n)
// 🧠 Space Complexity: O(n) (frequency map)
