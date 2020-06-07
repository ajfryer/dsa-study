const linearSearch = (arr, value) => {
  let tries = 0;
  for (let i = 0; i < arr.length; i++) {
    tries++;
    if (arr[i] == value) return { i, tries };
  }
  return { i: -1, tries };
};

module.exports = linearSearch;
