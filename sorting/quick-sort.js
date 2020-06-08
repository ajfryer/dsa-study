function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      //console.log('before partition', array);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function quickSort(array, start = 0, end = array.length, step = 0) {
  if (start >= end) {
    return array;
  }
  step += 1;
  //console.log('step:', step);
  //console.log('before partition', array);
  const middle = partition(array, start, end);
  //console.log('after partition', array);
  //console.log('middle', middle);
  array = quickSort(array, start, middle, step);
  //console.log('after first quicksort', array);
  array = quickSort(array, middle + 1, end, step);
  return array;
}

module.exports = quickSort;
