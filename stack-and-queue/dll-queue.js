class _Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DLLQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(data) {
    const node = new _Node(data, null, null);

    if (this.head === null) {
      this.head = node;
      node.prev = null;
    }

    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail; /*Created DLL here*/
    }
    this.tail = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.head === null) {
      return;
    }
    const node = this.head;
    this.head = this.head.next;
    //if this is the last item in the queue
    if (node === this.tail) {
      this.tail = null;
    }
    return node.value;
  }
}

function peek(queue) {
  if (!queue.head) return 'Queue is empty';
  return queue.head.value;
}

function size(queue) {
  results = 0;
  if (!queue.head) return results;
  let currNode = queue.head;
  while (currNode) {
    currNode = currNode.next;
    results++;
  }
  return results;
}

function isEmpty(queue) {
  if (!queue.head) return true;
  return false;
}

function display(queue) {
  if (!queue.head) console.log('Queue is empty');
  let currNode = queue.head;
  while (currNode) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

const dancePairing = () => {
  const mQ = new DLLQueue();
  const fQ = new DLLQueue();
  const pairs = [];

  const dancers = [
    { name: 'Jane', gender: 'F' },
    { name: 'Frank', gender: 'M' },
    { name: 'John', gender: 'M' },
    { name: 'Sherlock', gender: 'M' },
    { name: 'Madonna', gender: 'F' },
    { name: 'David', gender: 'M' },
    { name: 'Christopher', gender: 'M' },
    { name: 'Beyonce', gender: 'F' },
  ];

  for (const d of dancers) {
    if (d.gender === 'F') fQ.enqueue(d.name);
    else mQ.enqueue(d.name);

    if (!isEmpty(fQ) && !isEmpty(mQ))
      pairs.push({ F: fQ.dequeue(), M: mQ.dequeue() });
  }

  pairs.forEach((p) =>
    console.log(`Female dancer is ${p.F} and the male dancer is ${p.M}`)
  );

  if (size(fQ) > 0)
    console.log(`there are ${size(fQ)} male dancers waiting to dance`);
  if (size(mQ) > 0)
    console.log(`there are ${size(mQ)} male dancers waiting to dance`);
};

const ophidianBank = (minutes) => {
  const queue = new DLLQueue();
  // Assumption: New people join the queue at the same rate they are seen
  console.log(`Bank is now open. There are ${size(queue)} people in line`);

  for (var i = 0; i < minutes; i++) {
    // new customer arrives
    queue.enqueue('P');

    // next customer starts service
    const serving = queue.dequeue();

    // 25% chance they have to go to back of the line
    if (Math.random() < 0.25) {
      queue.enqueue(serving);
    }
  }

  console.log(
    `After ${minutes} minutes, the bank has ${size(queue)} people in line`
  );
};

const main = () => {
  const starTrekQ = new DLLQueue();

  console.log(isEmpty(starTrekQ));

  // push: add a value to the top of the SLL queue
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  display(starTrekQ);
  console.log(isEmpty(starTrekQ));

  console.log(peek(starTrekQ));
  starTrekQ.dequeue();
  starTrekQ.dequeue();

  console.log(isEmpty(starTrekQ));
  display(starTrekQ);

  dancePairing();
  ophidianBank(10);
};

//main();
