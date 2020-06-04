const filter = (arr, fn) => {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (fn(value)) results.push(value); // if value passes function, push to results
  }
  return results;
};

console.log(
  filter([1, 2, 5, 6, 3, 8], (num) => {
    if (num < 5) return num;
  })
);
