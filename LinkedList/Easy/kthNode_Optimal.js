class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function findNode(head, k) {
  let fast = head;
  let slow = head;

  for (let i = 0; i < k; i++) {
    if (fast == null) {
      return -1;
    }
    fast = fast.next;
  }

  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow.data;
}

// Circular list
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(findNode(head, 2)); // true

// ⏱ Time & Space Complexity

// Time: O(N)

// Space: O(1) ✅
