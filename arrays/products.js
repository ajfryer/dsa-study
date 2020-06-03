const products = (arr) => {
  const product = arr.reduce((prev, curr) => {
    return prev * curr;
  }, 1);
  console.log(product);
  return arr.map((a) => product / a);
};

/*

  Input:[1, 3, 9, 4]
  Output:[108, 36, 12, 27]

*/

console.log(products([1, 3, 9, 4]));
