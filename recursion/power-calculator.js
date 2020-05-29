const powerCalculator = (base, exp) => {
  // error case
  if (exp < 0) return 'exponent should be >= 0';
  // base case
  if (exp === 0) return 1;
  // recursive/general case
  return base * powerCalculator(base, exp - 1);
};

console.log(powerCalculator(process.argv[2], process.argv[3]));
