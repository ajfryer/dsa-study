const rotated = (str1, str2) => {
  // base rotation cases
  if (str1.length !== str2.length) return false;
  if (str1 === str2) return true;
  // check for rotation
  for (i = 0; i < str2.length; i++) {
    if (str1[0] === str2[i]) {
      const rotation = str2.slice(i, str2.length).concat(str2.slice(0, i));
      if (rotation === str1) return true;
    }
  }
  return false;
};

console.log(rotated('apple', 'aple')); // false
console.log(rotated('apple', 'apple')); // true

console.log(rotated('amazon', 'azonma')); // false
console.log(rotated('amazon', 'azonam')); // true

console.log(rotated('google', 'ggooel')); // false
console.log(rotated('google', 'legoog')); // true
