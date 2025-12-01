function lastIndex(s) {
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "1") {
      return i;
    }
  }
  return -1;
}

console.log(lastIndex("00001")); // 4
console.log(lastIndex("0")); // -1

// 📈 Complexity

// Time: O(n)

// Space: O(1)
