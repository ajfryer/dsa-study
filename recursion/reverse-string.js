const reverseString = (string) => {
  // base case
  if (string.length === 1) return string;
  // general case
  return reverseString(string.slice(1)) + string[0];
};

console.log(reverseString(process.argv[2]));
