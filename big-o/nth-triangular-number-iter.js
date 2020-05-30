const nthTriangularNumber = (num) => (num * (num + 1)) / 2;

console.log(nthTriangularNumber(Number(process.argv[2])));
