// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    /* If the stack is empty, then the node will be the
       top of the stack */
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    /* If the stack already has something, 
       then create a new node,
       add data to the new node, and
       have the pointer point to the top */
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    /* In order to remove the top of the stack, you have to point
       the pointer to the next item and that next item becomes the
       top of the stack */
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

const display = (stack) => {
  let currNode = stack.top;
  if (!currNode) {
    console.log('stack is empty');
    return;
  }
  while (currNode) {
    console.log(currNode.data);
    currNode = currNode.next;
  }
};

const peek = (stack) => {
  let currNode = stack.top;
  if (!currNode) {
    return 'stak is empty';
  }
  return currNode.data;
};

const isEmpty = (stack) => {
  return stack.top === null ? true : false;
};

const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let stack = new Stack();
  let results = '';

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  while (stack.top !== null) {
    results += stack.pop();
  }

  return str === results ? true : false;
};

const isBalanced = (expression) => {
  const stack = new Stack();
  const brackets = { '(': ')', '[': ']', '{': '}' };
  const quotes = { '"': '"', "'": "'" };
  let quoted = false;
  for (let i = 0; i < expression.length; i++) {
    if (quoted) {
      if (expression[i] === peek(stack)) {
        stack.pop();
        quoted = false;
      }
    } else {
      if (Object.keys(quotes).includes(expression[i])) {
        stack.push(expression[i]);
        quoted = true;
      } else if (brackets[expression[i]]) {
        stack.push(brackets[expression[i]]);
      } else if (expression[i] === peek(stack)) {
        stack.pop();
      } else if (Object.values(brackets).includes(expression[i]))
        console.error('Unexpected ' + expression[i]);
    }
  }
  if (!isEmpty(stack)) {
    console.error('Expected ' + peek(stack));
    return false;
  }
  return true;
};

const sort = (stack) => {
  const sortedStack = new Stack();
  while (stack.top) {
    if (isEmpty(sortedStack)) {
      sortedStack.push(stack.pop());
    }
    let valToSort = stack.pop();

    if (peek(sortedStack) > valToSort) {
      sortedStack.push(valToSort);
    } else if (peek(sortedStack) > peek(stack)) {
      sortedStack.push(stack.pop());
    } else if (valToSort > peek(sortedStack)) {
      while (valToSort > peek(sortedStack)) {
        stack.push(sortedStack.pop());
      }
      sortedStack.push(valToSort);
    }
  }
  return sortedStack;
};

const main = () => {
  const starTrek = new Stack();

  // peek: look at the top value of the stock without popping it
  console.log(peek(starTrek));

  // isEmpty: check if the stack is empty
  console.log(isEmpty(starTrek));

  // push: add a value to the top of the stack
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  // display: print the stack
  display(starTrek);

  // pop: remove a value from the top of the stack
  starTrek.pop();
  starTrek.pop();

  // isPalindrome: checks if the str is a palindrome using a stack
  console.log(isPalindrome('dad'));
  console.log(isPalindrome('A man, a plan, a canal: Panama'));
  console.log(isPalindrome('1001'));
  console.log(isPalindrome('Tauhida'));

  // isBalanced: checks if an expression of brackets [,{,( and quotes '," is balanced
  console.log(isBalanced('[{("\'3+4/2*5\'")}]'));
  console.log(isBalanced('[{("\'3+4/2*5\'")]'));

  // sort: sorts a stack using insertion sort
  const unsortedStack = new Stack();
  unsortedStack.push(6);
  unsortedStack.push(4);
  unsortedStack.push(7);
  unsortedStack.push(12);
  unsortedStack.push(1);
  display(sort(unsortedStack));
};

//main();

module.exports = {
  Stack,
  display,
  peek,
  isEmpty,
};
