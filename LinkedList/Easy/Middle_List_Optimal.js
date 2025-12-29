class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function middleNode(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  console.log(slow.data);
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

middleNode(head);
head.next.next.next.next.next = new Node(6);
middleNode(head);

// ⏱ Time & Space Complexity (DSA mandatory 😄)

// Time Complexity: O(N)

// Space Complexity: O(1)
