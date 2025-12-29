class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function removeCycle(head) {
  let slow = head;
  let fast = head;

  // Step 1: Detect cycle
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) break;
  }

  // No cycle
  if (fast === null || fast.next === null) {
    return head;
  }

  // Step 2: Find cycle start
  slow = head;
  let prev = null;

  while (slow !== fast) {
    prev = fast;
    slow = slow.next;
    fast = fast.next;
  }

  // Step 3: Remove cycle
  prev.next = null;

  return prev;
}

// Test
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = head.next; // cycle

let x = removeCycle(head);
console.log(x);

// ⏱ Time & Space Complexity

// Time: O(N)

// Space: O(1)
