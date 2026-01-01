class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
function removeNode(head) {
  let revhead = reverseList(head);

  let maxnode = revhead;
  let curr = revhead.next;
  while (curr !== null) {
    if (curr.data < maxnode.data) {
      maxnode.next = curr.next;
    } else {
      maxnode = curr;
    }
    curr = curr.next;
  }

  return reverseList(revhead);
}

let head = new Node(12);
head.next = new Node(15);
head.next.next = new Node(10);
head.next.next.next = new Node(11);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(3);

console.log(removeNode(head));

// Time: O(N)

// Space: O(1) ✅
