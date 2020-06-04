const merge = (a, b) => {
  let result = [],
    i = 0,
    j = 0;

  while (result.length < a.length + b.length) {
    let isADepleted = i >= a.length;
    let isBDepleted = j >= b.length;
    if (!isADepleted && (isBDepleted || a[i] < b[j])) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }
  return result;
};

console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
