class Node {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

function decimalList(head) {
  const MOD = 1000000007;
  let count = 0;
  let temp = head;

  while (temp != null) {
    count++;
    temp = temp.next;
  }

  // console.log(count);

  let res = 0;

  temp = head;
  while (temp !== null) {
    // num = num + temp.data * Math.pow(2, count - 1);
    res = (res * 2 + Number(temp.data)) % MOD;
    // console.log(num);

    count--;
    temp = temp.next;
  }

  console.log(res);
}
let head = new Node(1);
head.next = new Node(1);
head.next.next = new Node(1);
head.next.next.next = new Node(0);

decimalList(head);

// Time	O(N)
// Space	O(1)
