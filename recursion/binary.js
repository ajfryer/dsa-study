const toBinary = (num) => {
  //base case
  if (num == 0) return '0';
  if (num == 1) return '1';
  //recursive case
  let binary = Math.floor(num % 2);
  return toBinary(Math.floor(num / 2)) + binary;
};

console.log(toBinary(process.argv[2]));

/*

O(logn)
*/
