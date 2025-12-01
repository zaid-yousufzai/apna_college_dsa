let str = "geeksogeeks";

function canBePalindromeOptimal(str) {
  let set = new Set();

  for (let i of str) {
    if (set.has(i)) {
      set.delete(i);
    } else {
      set.add(i);
    }
  }

  if (set.size <= 1) {
    return true;
  }

  return false;
}

console.log(canBePalindromeOptimal("geeksogeeks")); // 1
console.log(canBePalindromeOptimal("geeksforgeeks")); // 0

// ⏳ Time Complexity: O(n)
// 🧠 Space Complexity: O(k) (k = unique characters, usually small → O(1) effectively)
