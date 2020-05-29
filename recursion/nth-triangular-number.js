const nthTriangularNumber = (num) => {
  // base case
  if (num === 1) return 1;
  return num + nthTriangularNumber(num - 1);
};

console.log(nthTriangularNumber(Number(process.argv[2])));

/*

input: num

base case:
  if (num === 1) return 1

general case:
  return num + nthTriangularNumber(num -1)




*/
