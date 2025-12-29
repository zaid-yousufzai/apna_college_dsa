class Node {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

function intersectionOfList(head1, head2) {
  let set = new Set();
  let temp = head2;

  // store head2 elements
  while (temp !== null) {
    set.add(temp.data);
    temp = temp.next;
  }

  let temp2 = head1;
  let arr = [];

  // check head1 elements
  while (temp2 !== null) {
    if (set.has(temp2.data)) {
      arr.push(temp2.data);
    }
    temp2 = temp2.next;
  }

  if (arr.length === 0) return null;

  // build new linked list
  let newHead = new Node(arr[0]);
  let curr = newHead;

  for (let i = 1; i < arr.length; i++) {
    curr.next = new Node(arr[i]);
    curr = curr.next;
  }

  console.log(newHead);
}

// Time: O(n + m)

// Space: O(m) (Set + result list)

let head1 = new Node(9);
head1.next = new Node(6);
head1.next.next = new Node(4);
head1.next.next.next = new Node(2);
head1.next.next.next.next = new Node(3);
head1.next.next.next.next.next = new Node(8);

let head2 = new Node(1);
head2.next = new Node(2);
head2.next.next = new Node(8);
head2.next.next.next = new Node(6);

intersectionOfList(head1, head2);
