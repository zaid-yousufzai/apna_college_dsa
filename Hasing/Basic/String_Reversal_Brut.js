function reverseUniqueBrute(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== " ") rev += str[i];
  }

  let res = "";

  for (let i = 0; i < rev.length; i++) {
    let repeated = false;
    for (let j = 0; j < i; j++) {
      if (rev[i] === rev[j]) {
        repeated = true;
        break;
      }
    }
    if (!repeated) res += rev[i];
  }

  return res;
}

console.log(reverseUniqueBrute("GEEKS FOR GEEKS"));
console.log(reverseUniqueBrute("I AM AWESOME"));

// ⏱ Time Complexity: O(n²)
// 🗂 Space Complexity: O(n)
