const { Stack, display, peek, isEmpty } = require('./stack.js');

class StackQueue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }
  enqueue(value) {
    this.stackA.push(value);
  }
  dequeue() {
    while (this.stackA.top) {
      this.stackB.push(this.stackA.pop());
    }
    let data = this.stackB.pop();
    while (this.stackB.top) {
      this.stackA.push(this.stackB.pop());
    }
    return data;
  }
}

const main = () => {
  const starTrekQ = new StackQueue();

  console.log(isEmpty(starTrekQ.stackA));

  // push: add a value to the top of the SLL queue
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  display(starTrekQ.stackA);
  //console.log(peek(starTrekQ.stackA));

  starTrekQ.dequeue();
  starTrekQ.dequeue();

  console.log(isEmpty(starTrekQ.stackA));
  display(starTrekQ.stackA);
};

//main();
