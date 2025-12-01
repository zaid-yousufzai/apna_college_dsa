let a = [1, 2, 3, 4, 6],
  k1 = 6;
let b = [1, 2, 4, 5, 6],
  k2 = 3;
let c = [2, 3, 5, 6],
  k3 = 1;

function search(ar, k) {
  for (let i = 0; i < a.length; i++) {
    if (ar[i] == k) {
      return true;
    }
  }

  return false;
}
console.log(search(a, k1));
console.log(search(b, k2));
console.log(search(c, k3));

// ✔ Works
// ⏱ Time: O(n)
// 💾 Space: O(1)
