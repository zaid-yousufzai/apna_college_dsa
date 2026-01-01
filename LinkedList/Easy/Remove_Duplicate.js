class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function removeNode(head) {
  let curr = head;
  while (curr !== null) {
    if (curr.next !== null && curr.data === curr.next.data) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  console.log(head);
}

let head = new Node(2);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

removeNode(head);

// Time: O(N)

// Space: O(1) ✅
