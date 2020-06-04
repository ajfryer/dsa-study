const { display, isEmpty } = require('../linked-list/utils.js');

// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SLLQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(data) {
    const node = new _Node(data);

    if (this.head === null) {
      this.head = node;
    }

    if (this.tail) {
      this.tail.next = node;
    }
    //make the new node the tail item on the queue
    this.tail = node;
  }
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.head === null) {
      return;
    }
    const node = this.head;
    this.head = this.head.next;
    //if this is the tail item in the queue
    if (node === this.tail) {
      this.tail = null;
    }
    return node.value;
  }
}

const peek = (queue) => {
  return queue.head.value;
};

const main = () => {
  const starTrekQ = new SLLQueue();

  console.log(isEmpty(starTrekQ));

  // push: add a value to the top of the SLL queue
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  display(starTrekQ, 'displaying queue items:');
  console.log(isEmpty(starTrekQ));

  console.log(peek(starTrekQ));
  starTrekQ.dequeue();
  starTrekQ.dequeue();

  console.log(isEmpty(starTrekQ));
  display(starTrekQ, 'displaying queue items:');
};

//main();
