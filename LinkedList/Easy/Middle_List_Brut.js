class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function size(head) {
  let count = 0;
  let current = head;
  while (current) {
    count++;
    current = current.next;
  }
  return count;
}

function middleNode(head) {
  let n = size(head);
  let mid = Math.floor(n / 2); // second middle for even

  let current = head;
  for (let i = 0; i < mid; i++) {
    current = current.next;
  }

  console.log(current.data);
}

// Test
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

middleNode(head);
head.next.next.next.next.next = new Node(6);
middleNode(head);

// ⏱ Time & Space Complexity (Brute Force)

// Time: O(N) + O(N) = O(N)

// Space: O(1)
