const powerCalculator = (base, exp) => {
  if (exp < 0) return 'exponent should be >= 0';
  return base ** exp;
};

console.log(powerCalculator(process.argv[2], process.argv[3]));
