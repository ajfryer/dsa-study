const bucketSort = (arr, max = undefined) => {
  // return arrays of length <= 1
  if (arr.length <= 1) return arr;
  // if max parameter undefined, calculate max
  max = max === undefined ? Math.max(...arr) : max;
  // get the number of elements in the array
  const numElems = arr.length;
  // buckets is a new array of numElems number of empty arrays
  const buckets = [...Array(numElems)].map(() => []);
  // for each element, add it to its proper bucket
  for (let i = 0; i < numElems; i++) {
    const value = arr[i];
    const index = Math.floor((numElems * value) / (max + 1));
    buckets[index].push(value);
  }
  // sort the buckets and return the flattened array;
  buckets.forEach((bucket) => bucket.sort());
  return buckets.flat();
};

module.exports = bucketSort;
