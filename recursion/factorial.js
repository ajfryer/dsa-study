/*

Write a recursive function that finds the factorial of a given number. 
The factorial of a number can be found by multiplying that number by each number between itself and 1. 
For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

*/

const factorial = (num) => {
  //base case
  if (num === 1) return 1;
  // general case
  return num * factorial(num - 1);
};

console.log(factorial(process.argv[2]));
