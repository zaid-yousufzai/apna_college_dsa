class Node {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

function findPairs(head1, head2, x) {
  let set = new Set();
  let count = 0;

  let t1 = head1;
  while (t1 !== null) {
    set.add(t1.data);
    t1 = t1.next;
  }

  let t2 = head2;

  while (t2 !== null) {
    if (set.has(x - t2.data)) {
      count++;
    }
    t2 = t2.next;
  }

  console.log(count);
}

let head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(4);
head1.next.next.next.next = new Node(5);
head1.next.next.next.next.next = new Node(6);

let head2 = new Node(11);
head2.next = new Node(12);
head2.next.next = new Node(13);

findPairs(head1, head2, 15);

// | Approach          | Time     | Space    |
// | ----------------- | -------- | -------- |
// | Optimal (Hashing) | O(n + m) | O(m)     |
