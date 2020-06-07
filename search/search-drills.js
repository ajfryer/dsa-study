const binarySearch = require('./binary-search.js');
const linearSearch = require('./linear-search.js');
const BinarySearchTree = require('../binary-search-tree/binary-search-tree.js');
const { drill2, drill3, drill4, drill5, drill6, drill7 } = require('./data.js');

/*
1. How many searches?
  Q: Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.

  A: 4 recursive searches

  Q: Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 16.

  A: 4 recursive searches
*/

/*
2. 
For exercises 1 and 2, you will be using a search algorithm to search for an item in a dataset. 
1) Linear search
Given imported dataset A, find out how many tries it took to search for a particular item in the dataset. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.

2) Binary search
Use the same front end and the dataset from the previous exercise for this exercise. Use array.sort to sort the dataset. Then implement a binary search to find a particular value in the dataset. Display how many tries it took to search for a particular item in the dataset using binary search. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.
*/

/*
3. Find a book
Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a search algorithm? Implement your algorithm to find a book whose Dewey and book title is provided.
*/
const findBook = (library, dewey, title) => {
  for (let i = 0; i < library.length; i++) {
    if (library[i].dewey == dewey && library[i].title == title) return i;
  }
  return -1;
};

/*
4. Searching in a BST

** No coding is needed for these drills**. Once you have answered it, you can then code the tree and implement the traversal to see if your answer is correct.

1) Given a binary search tree whose in-order and pre-order traversals are respectively 14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90. What would be its postorder traversal?
// postorder traversal: 14 19 15 27 25 79 90 91 89 35

2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?
// preorder traversal: 8 6 5 7 10 9 11
*/

/*
5. Implement different tree traversals
Using your BinarySearchTree class from your previous lesson, create a binary search tree with the following dataset: 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22. Then implement inOrder(), preOrder(), and postOrder() functions. Test your functions with the following datasets.
A pre-order traversal should give you the following order: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90
In-order: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25
*/

/*
6. Find the next commanding officer
               Captain Picard
             /                \
    Commander Riker       Commander Data
      /         \               \
 Lt. Cmdr.   Lt. Cmdr.          Lt. Cmdr.
 Worf        LaForge            Crusher
   /                           /
Lieutenant                  Lieutenant
security-officer            Selar

This tree is meant to represent who is in charge of lower-ranking officers. For example, Commander Riker is directly responsible for Worf and LaForge. People of the same rank are at the same level in the tree. However, to distinguish between people of the same rank, those with more experience are on the left and those with less on the right (i.e., experience decreases from left to right). Suppose a fierce battle with an enemy ensues. Write a program that will take this tree of commanding officers and outlines the ranking officers in their ranking order so that if officers start dropping like flies, we know who is the next person to take over command.
*/

/*
7. Max profit
The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on a particular day, and sell the shares on a subsequent day, write an algorithm to work out what the maximum profit you could make would be.
*/
const maxProfitUnoptimized = (arr) => {
  let maxProfit = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    const buy = arr[i];
    for (let j = i + 1; j < arr.length - i; j++) {
      const sell = arr[j];
      const profit = sell - buy;
      maxProfit = maxProfit > profit ? maxProfit : profit;
    }
  }
  return maxProfit;
};

const maxProfitOptimized = (arr) => {
  let maxSoFar = 0;
  let maxEndingHere = 0;

  for (let i = 1; i < arr.length - 1; i++) {
    maxEndingHere = maxEndingHere + (arr[i] - arr[i - 1]);
    if (maxEndingHere < 0) maxEndingHere = 0;
    if (maxSoFar < maxEndingHere) maxSoFar = maxEndingHere;
  }

  return maxSoFar;
};

const main = () => {
  // drill 2
  console.log('drill2', linearSearch(drill2, drill2[0])); // { i: 0, tries: 1 }
  console.log('drill2', linearSearch(drill2, drill2[drill2.length - 1])); // { i: 99, tries: 100 }
  console.log('drill2', linearSearch(drill2, 100)); // { i: -1, tries: 100 }
  console.log('drill2', linearSearch(drill2, 91)); // { i: 49, tries: 50 }
  drill2.sort();
  console.log('drill2', binarySearch(drill2, drill2[0])); //
  console.log('drill2', binarySearch(drill2, drill2[drill2.length - 1])); //
  console.log('drill2', binarySearch(drill2, 100)); //
  console.log('drill2', binarySearch(drill2, 91)); //
  console.log('drill2', binarySearch(drill2, 50)); //

  // drill 3
  console.log('drill3', findBook(drill3, 4, 'E')); // 4
  console.log('drill3', findBook(drill3, 5, 'E'));

  // drill 4
  const drill4BST1 = new BinarySearchTree();
  drill4[0].forEach((datum) => drill4BST1.insert(datum));
  console.log('drill4BST1 preOrder():', drill4BST1.preOrder());
  console.log('drill4BST1 inOrder():', drill4BST1.inOrder());
  console.log('drill4BST1 postOrder():', drill4BST1.postOrder());

  const drill4BST2 = new BinarySearchTree();
  drill4[1].forEach((datum) => drill4BST2.insert(datum));
  console.log('drill4BST2 preOrder():', drill4BST2.preOrder());
  console.log('drill4BST2 inOrder():', drill4BST2.inOrder());
  console.log('drill4BST2 postOrder():', drill4BST2.postOrder());

  // drill 5
  const bst = new BinarySearchTree();
  drill5.forEach((datum) => bst.insert(datum));
  console.log('preOrder():', bst.preOrder());
  console.log('inOrder():', bst.inOrder());
  console.log('postOrder():', bst.postOrder());

  // drill 6
  const officersTree = new BinarySearchTree();
  drill6.forEach((datum) => {
    officersTree.insert(datum.key, datum.value);
  });
  console.log(officersTree.bfs(officersTree));

  // drill 7
  console.log(maxProfitOptimized(drill7));
};

main();
