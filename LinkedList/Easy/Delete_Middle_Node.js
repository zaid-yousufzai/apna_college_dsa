class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function size(head) {
  let count = 0;
  let temp = head;
  while (temp !== null) {
    count++;
    temp = temp.next;
  }

  return count;
}

function deleteMiddle(head) {
  if (head == null || head.next == null) {
    return null;
  }
  let mid = Math.floor(size(head) / 2);
  // console.log(mid);
  let temp = head;
  let count = 0;
  while (temp !== null) {
    if (count == mid - 1) {
      temp.next = temp.next.next;
    }
    count++;
    temp = temp.next;
  }

  console.log(head);
}

// Test
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// size(head)
// deleteMiddle(head);
head.next.next.next.next.next = new Node(6);
deleteMiddle(head);

// ⏱ Time & Space Complexity (Brute Force)

// Time: O(N) + O(N) = O(N)

// Space: O(1)
