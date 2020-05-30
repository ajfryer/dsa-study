const fibonacci = (num) => {
  const results = [0, 1];
  for (let i = 2; i <= num; i++) {
    results.push(results[i - 1] + results[i - 2]);
  }
  return results.slice(1);
};

console.log(fibonacci(process.argv[2]));
