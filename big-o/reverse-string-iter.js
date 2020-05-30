const reverseString = (str) => {
  str = str.split('');
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    const firstChar = str[i];
    const lastChar = str[str.length - i - 1];
    str[i] = lastChar;
    str[str.length - i - 1] = firstChar;
  }
  return str.join('');
};

console.log(reverseString(process.argv[2]));
