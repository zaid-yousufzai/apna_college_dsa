class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function isCircularBrute(head) {
  let visited = new Set();
  let current = head;
  let prev=null;

  while (current !== null) {
    if (visited.has(current)) {
      prev.next=null;
      return prev
    }
    visited.add(current);
    prev=current;
    current = current.next;
  }

  return false; // reached null → not circular
}

// Circular list
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = head.next;

console.log(isCircularBrute(head)); // true

// ⏱ Time & Space Complexity

// Time: O(N)

// Space: O(N)
