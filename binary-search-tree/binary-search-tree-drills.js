const BinarySearchTree = require('./binary-search-tree.js');

/*
1. Draw a BST
See binary-search-tree-drills.md
*/

/*
2. Remove the root
See binary-search-tree-drills.md
*/

/*
  3. Create BST Class and test insert()
*/
const generateDrillBSTs = () => {
  let unbalancedStringBST = new BinarySearchTree();
  ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'].forEach(
    (datum) => {
      unbalancedStringBST.insert(datum);
    }
  );
  //console.log(BST1);

  let balancedStringBST = new BinarySearchTree();
  ['E', 'A', 'F'].forEach((datum) => {
    balancedStringBST.insert(datum);
  });
  //console.log(BST1);

  let unbalancedNumberBST = new BinarySearchTree();
  [3, 1, 4, 6, 9, 2, 5, 7].forEach((datum) => {
    unbalancedNumberBST.insert(datum);
  });
  //console.log(BST2);

  let balancedNumberBST = new BinarySearchTree();
  [2, 1, 3].forEach((datum) => {
    balancedNumberBST.insert(datum);
  });
  //console.log(BST3);

  return {
    unbalancedStringBST,
    balancedStringBST,
    unbalancedNumberBST,
    balancedNumberBST,
  };
};

/*
4. What does this program do?

This program recursively sums all values in the tree.
runtime is O(n) where n is the number of nodes in the tree.

function tree(t){
  if(!t) return 0;
  return tree(t.left) + t.value + tree(t.right)
}

*/

/*
5. Height of a BST
Write an algorithm to find the height of a binary search tree. What is the time complexity of your algorithm?

time complexity: O(n)
*/
const height = (BST) => {
  // base case. If at root or leaf, start recursive backtrack
  if (BST === null) return 0;
  // recursive case. on backtrack, count longest path
  let leftHeight = height(BST.left);
  let rightHeight = height(BST.right);
  return leftHeight < rightHeight ? rightHeight + 1 : leftHeight + 1;
};

/*
6. Is it a BST?
Write an algorithm to check whether an arbitrary binary tree is a binary search tree, assuming the tree does not contain duplicates.
*/
const isBST = (BST) => {
  // base case. If empty tree or at leaf, return true
  if (BST === null || (BST.left === null && BST.right === null)) return true;
  // recursive case. if
  if (BST.left) {
    if (BST.left.key < BST.key) return isBST(BST.left);
    return false;
  }
  if (BST.right) {
    if (BST.right.key >= BST.key) return isBST(BST.right);
    return false;
  }
};

/*
7. nth largest node
Write an algorithm to find the nth largest node in a binary search tree.
*/
const nthLargestNode = (BST, n = 3, nLargest = []) => {
  // if we have run out of tree to explore, return largest
  if (BST === null) return;
  // if largest.length < 3 push the value to largest
  if (nLargest.length < n) nLargest.push(BST.key);
  // else if key is > third largest value, it replaces the third largest value
  else if (BST.key > nLargest[0]) nLargest[0] = BST.key;
  // sort largest to make sure third largest is at index 0;
  nLargest.sort();
  // traverse the rest of the tree in search of third largest
  nthLargestNode(BST.left, n, nLargest);
  nthLargestNode(BST.right, n, nLargest);
  // if largest.length > 3, return third largest value at index 0
  // otherwise tree length is too short to have third largest
  if (nLargest.length === n) return nLargest[0];
  return [];
};

/*
8. Balanced BST
Write an algorithm that checks if a BST is balanced (i.e., a tree where no 2 leaves differ in distance from the root by more than 1).
*/
const isBalanced = (BST) => {
  const depth = (node, mode) => {
    if (node === null) return 0;
    if (mode === 'min')
      return 1 + Math.min(depth(node.left, 'min'), depth(node.right, 'min'));
    if (mode === 'max')
      return 1 + Math.max(depth(node.left, 'max'), depth(node.right, 'max'));
  };

  return depth(BST, 'max') - depth(BST, 'min') <= 1;
};

/*
9. Are they the same BSTs?
You are given two arrays which represent two sequences of keys that are used to create two binary search trees. Write a program that will tell whether the two BSTs will be identical or not without actually constructing the tree. You may use another data structure such as an array or a linked list but don't construct the BST. What is the time complexity of your algorithm? E.g., 3, 5, 4, 6, 1, 0, 2 and 3, 1, 5, 2, 4, 6, 0 are two sequences of arrays but will create the exact same BSTs and your program should return true. 

Time complexity: O(n^2)
*/
const sameBST = (arr, arr2) => {
  if (arr[0] !== arr2[0] || arr.length !== arr2.length) return false;
  if (arr.length === 0) return true;
  let leftArr = [[], []];
  let rightArr = [[], []];

  for (let i = 1; i < arr.length; i++) {
    if (arr[0] > arr[i]) leftArr[0].push(arr[i]);
    else rightArr[0].push(arr[i]);
    if (arr2[0] > arr2[i]) leftArr[1].push(arr2[i]);
    else rightArr[1].push(arr2[i]);
  }
  return sameBST(leftArr[0], leftArr[1]) && sameBST(rightArr[0], rightArr[1]);
};

const main = () => {
  const {
    unbalancedStringBST,
    balancedStringBST,
    unbalancedNumberBST,
    balancedNumberBST,
  } = generateDrillBSTs();

  console.log('height of tree: ', height(unbalancedNumberBST)); // 5

  console.log('tree is a binary search tree: ', isBST(balancedNumberBST)); // true

  console.log('3rd largest node: ', nthLargestNode(unbalancedStringBST, 3)); // T
  console.log('4th largest node: ', nthLargestNode(unbalancedStringBST, 4)); // S

  console.log('is balanced: ', isBalanced(unbalancedStringBST)); // false
  console.log('is balanced: ', isBalanced(balancedStringBST)); // true

  let arr = [3, 5, 4, 6, 1, 0, 2];
  let arr2 = [3, 1, 5, 2, 4, 6, 0];
  let arr3 = [3, 6, 5, 2, 1, 0, 4];

  console.log('is same bst:', sameBST(arr, arr2)); // true
  console.log('is same bst:', sameBST(arr, arr3)); // false
};

main();
