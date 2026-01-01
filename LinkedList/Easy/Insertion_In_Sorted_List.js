class Node {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

function print(head) {
  let temp = head;
  while (temp !== null) {
    console.log(temp.data);
    temp = temp.next;
  }
}

function insert(head, x) {
  let node = new Node(x);
  if (head == null || x < head.data) {
    node.next = head;
    return node;
  }

  let temp = head;
  while (temp.next !== null && temp.next.data < x) {
    temp = temp.next;
  }
  node.next = temp.next;
  temp.next = node;

  return head;
}

let head = new Node(2);
head.next = new Node(2);
head.next.next = new Node(4);
head.next.next.next = new Node(7);
head.next.next.next.next = new Node(10);
head.next.next.next.next.next = new Node(12);
print(insert(head, 6));

// Time	O(N)
// Space	O(1)
