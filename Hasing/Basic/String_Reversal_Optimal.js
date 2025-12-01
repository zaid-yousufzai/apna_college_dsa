function reverseUnique(str) {
  let seen = new Set();
  let res = [];

  for (let i = str.length - 1; i >= 0; i--) {
    let ch = str[i];

    if (ch === " ") continue;

    if (!seen.has(ch)) {
      seen.add(ch);
      res.push(ch);
    }
  }

  return res.join("");
}

console.log(reverseUnique("GEEKS FOR GEEKS"));
console.log(reverseUnique("I AM AWESOME"));

// ⏱ Time Complexity: O(n)
// 🗂 Space Complexity: O(n) (Set + result array)
