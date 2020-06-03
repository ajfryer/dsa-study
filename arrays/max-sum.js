const maxSum = (arr) => {
  let min = 0,
    max = 0,
    sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    sum += val;
    if (sum > max) max = sum;
    else if (sum < min) min = sum;
  }
  return max - min;
};

/*

  Input: [4, 6, -3, 5, -2, 1]
  Output: 12

  sum: [4, 10, 7, 12, 10, 11]


*/

console.log(maxSum([4, 6, -3, 5, -2, 1]));
