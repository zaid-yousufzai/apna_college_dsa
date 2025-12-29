class Node {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

function findPairs(head1, head2, x) {
  let h1 = [];
  let h2 = [];

  let t1 = head1;
  let t2 = head2;

  while (t1 !== null) {
    h1.push(t1.data);
    t1 = t1.next;
  }

  while (t2 !== null) {
    h2.push(t2.data);
    t2 = t2.next;
  }

  let count = 0;

  for (let i = 0; i < h1.length; i++) {
    for (let j = 0; j < h2.length; j++) {
      if (h1[i] + h2[j] == x) {
        count++;
      }
    }
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
// | Brute Force       | O(n × m) | O(n + m) |
