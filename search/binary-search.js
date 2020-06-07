const binarySearch = (array, value, start, end, tries) => {
  // initialize start, end, and tries variables
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length : end;
  tries = tries === undefined ? 1 : (tries += 1);

  // base cases: nothing found or value found at index (== item)
  if (value > array[array.length - 1] || value < array[0] || start > end)
    return { i: -1, tries };

  const index = Math.floor((start + end) / 2);
  const item = array[index];
  console.log(start, end);
  if (item == value) return { i: index, tries };
  // recursive cases: search values below index and above index;
  else if (item < value)
    return binarySearch(array, value, index + 1, end, tries);
  else if (item > value)
    return binarySearch(array, value, start, index - 1, tries);
};

module.exports = binarySearch;
