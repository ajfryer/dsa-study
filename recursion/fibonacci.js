/*
Write a recursive function that prints the Fibonacci sequence of a given number. 
The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. 
For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.
*/

const fibonacciSequence = (num) => {
  if (num < 1) return [0];
  if (num === 1) return [0, 1];
  else {
    var series = fibonacciSequence(num - 1);
    series.push(series[series.length - 1] + series[series.length - 2]);
    return series;
  }
};

console.log(fibonacciSequence(Number(process.argv[2])));

/*



*/
