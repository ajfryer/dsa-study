const factorial = (num) => {
  let results = 1;
  for (let i = num; i > 0; i--) {
    results *= i;
  }
  return results;
};

console.log(factorial(process.argv[2]));
