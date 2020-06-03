const LinkedList = require('./linked-list.js');
const {
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
} = require('./utils.js');

const main = () => {
  // create and display new empty linked list
  const SLL = new LinkedList();
  display(SLL);
  console.log('isEmpty', isEmpty(SLL));
  console.log('findPrevious', findPrevious(SLL, 'test'));

  // insert first item and display
  SLL.insertFirst('Apollo');
  display(SLL, 'inserted first item Apollo:');
  console.log('isEmpty', isEmpty(SLL));
  console.log('findPrevious', findPrevious(SLL, 'Apollo'));

  // insert several items and display
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  display(SLL, 'inserted several items:');

  // remove item Husker and display
  SLL.remove('Husker');
  display(SLL, 'removed item Husker:');

  // insert item Athena before Boomer and display
  SLL.insertBefore('Athena', 'Boomer');
  display(SLL, 'inserted Athena before Boomer:');

  // insert item Hotdog after Helo and display
  SLL.insertAfter('Hotdog', 'Helo');
  display(SLL, 'inserted Hotdog after Helo:');

  // insert item Kat at index 2 (aka 3rd item) and display
  SLL.insertAt('Kat', 2);
  display(SLL, 'inserted Kat at index 2');

  // remove item Tauhida and display
  SLL.remove('Tauhida');
  display(SLL, 'removed Tauhida');
  console.log('findLast', findLast(SLL));

  //display: displays the linked list.
  display(SLL, 'test of display');

  //size: returns the size of the linked list.
  console.log('test of size()', size(SLL));

  //isEmpty: finds if the list is empty or not (without using the size() function)
  console.log('test of isEmpty()', isEmpty(SLL));

  //findPrevious: finds the node before the item you are looking for
  console.log('test of findPrevious()', findPrevious(SLL, 'Helo').value);

  //findLast: returns the last node in the linked list
  console.log('test of findLast()', findLast(SLL).value);

  //reverse: returns a reversed linked list (recursive and iterative)
  display(reverseIterative(SLL), 'test of after reverseIterative()');
  display(reverseRecursive(SLL), 'test of reverseRecursive()');

  //nFromEnd: returns the value of the nth index from the end of the list
  console.log('test of nFromEnd()', nFromEnd(SLL, 3));
  console.log('test of nFromEnd()', nFromEnd(SLL, 4));
  console.log('test of nFromEnd()', nFromEnd(SLL, 10));

  //findMiddle: returns the value of the middle index of the list
  console.log('test of findMiddle()', findMiddle(SLL));

  //hasCycle: returns a boolean that indicates if the list has cycle
  // uses two pointers moving at 1x and 2x speed. If pointers, collide, there is cycle
  console.log('test of hasCycle()', hasCycle(SLL));

  SLL.head.next.next = SLL.head;
  console.log('test of hasCycle() after creating cycle', hasCycle(SLL));

  // sort: uses insertion sort to sort linked list
  let unsortedLL = new LinkedList();
  unsortedLL.insertLast(10);
  unsortedLL.insertLast(5);
  unsortedLL.insertLast(22);
  unsortedLL.insertLast(3);
  unsortedLL.insertLast(17);
  unsortedLL.insertLast(10);

  display(unsortedLL, 'this is an unsorted linked list:');

  display(insertionSort(unsortedLL), 'this is the list sorted:');

  return SLL;
};

main();
