let a = [1, 2, 3, 4, 6],
  k1 = 6;
let b = [1, 2, 4, 5, 6],
  k2 = 3;
let c = [2, 3, 5, 6],
  k3 = 1;

function search(ar, k) {
  let start = 0;
  let end = ar.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (ar[mid] == k) {
      return true;
    }
    if (ar[mid] < k) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
}
console.log(search(a, k1));
console.log(search(b, k2));
console.log(search(c, k3));

// ✔ Fast
// ⏱ Time: O(log n)
// 💾 Space: O(1)
