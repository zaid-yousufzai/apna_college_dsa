class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function isCircularBrute(head) {
  let slow = head;
  let fast = head;
  let cycle = false;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      cycle = true; // cycle found
      break;
    }
  }

  if (cycle) {
    slow = head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next;
      if (slow === fast) {
        return slow; // cycle found
      }
    }
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

// Space: O(1)
