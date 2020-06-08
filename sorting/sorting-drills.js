const mergeSort = require('./merge-sort.js');
const quickSort = require('./quick-sort.js');
const bucketSort = require('./bucket-sort.js');

/*
1. Understanding merge sort
Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
    What is the resulting list that will be sorted after 3 recursive calls to mergesort?
    // A: [ 21, 1, 26, 45 ]
    What is the resulting list that will be sorted after 16 recursive calls to mergesort?
    // A: [1,  2,  9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49]
    What are the first 2 lists to be merged?
    // A: [ 1, 21 ] and [ 26, 45 ]
    Which two lists would be merged on the 7th merge?
    // A: [ 1,  2,  9, 21, 26, 28, 29, 45] and [16, 27, 34, 39, 40, 43, 46, 49]
*/

/*
1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.
    The pivot could have been 17, but could not have been 14
    The pivot could have been either 14 or 17
    Neither 14 nor 17 could have been the pivot
    The pivot could have been 14, but could not have been 17
    // A: The pivot could have been either 14 or 17 because all 

2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.
    When using the last item on the list as a pivot
    // A: [3] 9, [10]] 12, [[14, 13, 15] 16, [17, 19]]
    When using the first item on the list as a pivot
    // A: 

*/

/*
7. Sort in place

Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).

*/

const randomSort = (arr) => {
  const swap = (arr, i, j) => {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  };
  for (let i = 1; i < arr.length - 1; i++) {
    j = i - 1;
    swap(arr, i, j);
  }
  return arr;
};

/*
8. Sorting books

Imagine that I gave you 20 books to sort in alphabetical order. Express this as an algorithm and then implement your algorithm.

// A:

Naive approach with <= 20 books:
  - I would most likely use a form of insertion sort where I order the books one by one by taking them from the unsorted pile and inserting them into a new pile in the right place so that the new pile is sorted!

  - A more interesting and useful approach for >= 20 books would be to use a form of bucket sort:
    - create 26 buckets for every letter of the alphabet.
    - go through the unordered books and place them in the appropriate bucket based on title
    - use a list for buckets that have more than one book. Use insertion sort to sort the list.
    - combine the buckets and all the books are ordered!
*/

simpleBookSort = (books) => {
  const length = books.length;

  for (let i = 1; i < length; i++) {
    let key = books[i];
    let j = i - 1;
    while (j >= 0 && books[j] > key) {
      books[j + 1] = books[j];
      j = j - 1;
    }
    books[j + 1] = key;
  }
  return books;
};

const main = () => {
  /*  */
  console.log(
    mergeSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40])
  );

  console.log(quickSort([14, 17, 13, 15, 19, 10, 3, 16, 9, 12]));

  console.time('quickSort');
  console.log(
    quickSort([
      89,
      30,
      25,
      32,
      72,
      70,
      51,
      42,
      25,
      24,
      53,
      55,
      78,
      50,
      13,
      40,
      48,
      32,
      26,
      2,
      14,
      33,
      45,
      72,
      56,
      44,
      21,
      88,
      27,
      68,
      15,
      62,
      93,
      98,
      73,
      28,
      16,
      46,
      87,
      28,
      65,
      38,
      67,
      16,
      85,
      63,
      23,
      69,
      64,
      91,
      9,
      70,
      81,
      27,
      97,
      82,
      6,
      88,
      3,
      7,
      46,
      13,
      11,
      64,
      76,
      31,
      26,
      38,
      28,
      13,
      17,
      69,
      90,
      1,
      6,
      7,
      64,
      43,
      9,
      73,
      80,
      98,
      46,
      27,
      22,
      87,
      49,
      83,
      6,
      39,
      42,
      51,
      54,
      84,
      34,
      53,
      78,
      40,
      14,
      5,
    ])
  );
  console.timeEnd('quickSort');

  console.time('mergeSort');
  console.log(
    mergeSort([
      89,
      30,
      25,
      32,
      72,
      70,
      51,
      42,
      25,
      24,
      53,
      55,
      78,
      50,
      13,
      40,
      48,
      32,
      26,
      2,
      14,
      33,
      45,
      72,
      56,
      44,
      21,
      88,
      27,
      68,
      15,
      62,
      93,
      98,
      73,
      28,
      16,
      46,
      87,
      28,
      65,
      38,
      67,
      16,
      85,
      63,
      23,
      69,
      64,
      91,
      9,
      70,
      81,
      27,
      97,
      82,
      6,
      88,
      3,
      7,
      46,
      13,
      11,
      64,
      76,
      31,
      26,
      38,
      28,
      13,
      17,
      69,
      90,
      1,
      6,
      7,
      64,
      43,
      9,
      73,
      80,
      98,
      46,
      27,
      22,
      87,
      49,
      83,
      6,
      39,
      42,
      51,
      54,
      84,
      34,
      53,
      78,
      40,
      14,
      5,
    ])
  );
  console.timeEnd('mergeSort');

  console.time('bucketSort');
  console.log(
    bucketSort([
      89,
      30,
      25,
      32,
      72,
      70,
      51,
      42,
      25,
      24,
      53,
      55,
      78,
      50,
      13,
      40,
      48,
      32,
      26,
      2,
      14,
      33,
      45,
      72,
      56,
      44,
      21,
      88,
      27,
      68,
      15,
      62,
      93,
      98,
      73,
      28,
      16,
      46,
      87,
      28,
      65,
      38,
      67,
      16,
      85,
      63,
      23,
      69,
      64,
      91,
      9,
      70,
      81,
      27,
      97,
      82,
      6,
      88,
      3,
      7,
      46,
      13,
      11,
      64,
      76,
      31,
      26,
      38,
      28,
      13,
      17,
      69,
      90,
      1,
      6,
      7,
      64,
      43,
      9,
      73,
      80,
      98,
      46,
      27,
      22,
      87,
      49,
      83,
      6,
      39,
      42,
      51,
      54,
      84,
      34,
      53,
      78,
      40,
      14,
      5,
    ])
  );
  console.timeEnd('bucketSort');

  const books = [...Array(20)].map(() =>
    Math.random().toString(36).substring(7)
  );
  console.time('simpleBookSort');
  console.log(`before: ${books} and after: ${simpleBookSort(books)}`);
  console.timeEnd('simpleBookSort');

  const randomNums = [...Array(20)].map(() => Math.random());
  console.time('randomSort');
  console.log(`before: ${randomNums} and after: ${randomSort(randomNums)}`);
  console.timeEnd('randomSort');
};

main();
