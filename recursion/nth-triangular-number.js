const nthTriangularNumber = (num) => {
  // base case
  if (num < 1) return 'num must be >= 1';
  if (num === 1) return 1;
  // recursive case
  return num + nthTriangularNumber(num - 1);
};

console.log(nthTriangularNumber(Number(process.argv[2])));
