const display = (
  listOrNode,
  msg = 'displaying linked list items:',
  isNode = false
) => {
  // initialize results and currNode for traversal
  const results = [];
  let currNode;
  if (isNode) currNode = listOrNode;
  else currNode = listOrNode.head;

  // list is empty, display empty list and return
  if (!currNode) {
    console.log('displaying EMPTY linked list:', results);
    return;
  }

  // until list is empty, push currNode values to result and traverse
  while (!!currNode) {
    results.push(currNode.value);
    currNode = currNode.next;
  }

  // display msg and results
  console.log(msg, results);
};

const size = (linkedList) => {
  // initialize results and currNode for traversal
  let results = 0;
  let currNode = linkedList.head;

  // list is empty, return result of 0
  if (!currNode) {
    return results;
  }

  // until list is empty, increment results and traverse
  while (!!currNode) {
    results++;
    currNode = currNode.next;
  }

  // return results
  return results;
};

const isEmpty = (linkedList) => {
  // initialize results and currNode for traversal
  let results = false;
  let currNode = linkedList.head;
  // list is empty, return results of true
  if (!currNode) {
    results = true;
    return results;
  }
  // if list is not empty, return false
  return results;
};

const findPrevious = (linkedList, item) => {
  // initialize currNode for traversal
  let currNode = linkedList.head;

  // If list is empty, return unable to find previous
  if (currNode === null) {
    console.log('unable to find previous. List is empty');
    return null;
  }

  // If head is item, unable to find previous
  if (currNode.value === item) {
    console.log('unable to find previous. List is length 1');
    return null;
  }

  // traverse list to node before key
  while (currNode.next !== null && currNode.next.value !== item) {
    currNode = currNode.next;
  }

  // returns the currNode
  return currNode;
};

const findLast = (linkedList) => {
  // initialize currNode for traversal
  let currNode = linkedList.head;

  // If list is empty, return unable to find previous
  if (currNode === null) {
    console.log('unable to find previous. List is empty');
    return null;
  }

  // traverse list to node before key
  while (currNode.next !== null) {
    currNode = currNode.next;
  }

  // returns the currNode
  return currNode;
};

const reverseRecursive = (linkedList) => {
  const head = linkedList.head;
  const recursion = (currNode) => {
    // base cases
    if (currNode === null) return null; // list is empty
    if (currNode.next === null) return currNode; // list is size 1

    //recusive cases
    const nextNode = currNode.next;
    currNode.next = null;
    const reverseRest = recursion(nextNode);
    nextNode.next = currNode;
    return reverseRest;
  };
  const reverseHead = recursion(head);
  linkedList.head = reverseHead;
  return linkedList;
};

const reverseIterative = (linkedList) => {
  let reversedListNode = null;
  let currNode = linkedList.head;

  while (currNode !== null) {
    let nextNode = currNode.next;

    currNode.next = reversedListNode;
    reversedListNode = currNode;

    currNode = nextNode;
  }

  linkedList.head = reversedListNode;

  return linkedList;
};

const nFromEnd = (linkedList, n) => {
  if (size(linkedList) < n) {
    console.log(`unable to get item from list. List size is <= than ${n}`);
    return;
  }

  let currNode = linkedList.head;
  let end = linkedList.head;
  for (let i = 0; i < n; i++) {
    end = end.next;
  }
  while (end !== null) {
    currNode = currNode.next;
    end = end.next;
  }

  return currNode.value;
};

const findMiddle = (linkedList) => {
  // initialize two pointers, one for endNode and middleNode
  let endNode = linkedList.head;
  let middleNode = linkedList.head;
  // advance endNode Pointer twice as fast as middleNode
  // account for even and odd list length cases
  while (endNode !== null && endNode.next !== null) {
    endNode = endNode.next.next;
    middleNode = middleNode.next;
  }

  // return middleNode value
  return middleNode.value;
};

const hasCycle = (linkedList) => {
  let slow = linkedList.head;
  let fast = linkedList.head;

  while (fast != null && fast.next != null) {
    slow = slow.next; // 1 hop
    fast = fast.next.next; // 2 hops

    if (slow == fast)
      // fast caught up to slow, so there is a loop
      return true;
  }
  return false; // fast reached null, so the list terminates
};

const insertionSort = (linkedList) => {
  let result = null;
  let currNode = linkedList.head;
  let nextNode;

  let sortedInsert = (sorted, newNode) => {
    //Temporary node to swap the elements
    let temp = {};
    let current = temp;
    temp.next = sorted;

    //Sort the list based on the specified order
    while (current.next !== null && current.next.value < newNode.value) {
      current = current.next;
    }

    //Swap the elements
    newNode.next = current.next;
    current.next = newNode;

    //Return the sorted list.
    return temp.next;
  };

  while (currNode !== null) {
    nextNode = currNode.next;

    result = sortedInsert(result, currNode);
    currNode = nextNode;
  }

  linkedList.head = result;
  return linkedList;
};

module.exports = {
  display,
  size,
  isEmpty,
  findPrevious,
  findLast,
  reverseRecursive,
  reverseIterative,
  nFromEnd,
  findMiddle,
  hasCycle,
  insertionSort,
};
