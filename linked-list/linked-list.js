class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  insertBefore(item, key) {
    // initialize currNode for traversal
    let currNode = this.head;

    // If list empty or head is key, insert first item
    if (currNode === null || currNode.value === key) {
      this.insertFirst(item);
      return;
    }
    // traverse list to node before key
    while (currNode.next !== null && currNode.next.value !== key) {
      currNode = currNode.next;
    }

    // if next node after traversal is null, key not found
    if (currNode.next === null) {
      console.log('cannot insert item before key. Key not found.');
      return;
    }

    // insert item as new node before key
    const newNode = new _Node(item, currNode.next);
    currNode.next = newNode;
  }
  insertAfter(item, key) {
    // initialize currNode for traversal
    let currNode = this.find(key);

    // If list empty insert first item
    if (this.head === null) {
      this.insertFirst(item);
      return;
    }

    // if key not found, return
    if (!currNode) {
      console.log('cannot insert item after key. Key not found.');
      return;
    }

    // insert item as new node after key
    const newNode = new _Node(item, currNode.next);
    currNode.next = newNode;
  }
  insertAt(item, idx) {
    // initialize currNode and currIdx for traversal
    let currNode = this.head;
    let currIdx = 0;

    // If list empty insert first item
    if (currNode === null) {
      this.insertFirst(item);
      return;
    }

    //traverse list until currIdx === idx or end of list
    while (currNode.next !== null && currIdx < idx - 1) {
      currNode = currNode.next;
      currIdx++;
    }

    // if next node after traversal is null, idx is not possible
    if (currNode.next === null) {
      console.log('cannot insert item at idx. Idx not possible.');
      return;
    }

    // insert item as new node at idx
    const newNode = new _Node(item, currNode.next);
    currNode.next = newNode;
  }
  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }
  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

module.exports = LinkedList;
