let a = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
let b = [0, 0, 0, 0];

function f(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1) {
      return i;
    }
  }

  return -1;
}

let x = f(a);
console.log(x);

let y = f(b);
console.log(y);

// | Approach                | Time         | Space    |
// | ----------------------- | ------------ | -------- |
// | Brute force             | **O(n)**     | **O(1)** |
