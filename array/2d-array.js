/*
Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.
*/

const zeroArr = (arr) => {
  return arr.map((row) => {
    if (row.indexOf(0) !== -1) return Array(row.length).fill(0);
    return row;
  });
};

const testArr = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

console.log(zeroArr(testArr));
