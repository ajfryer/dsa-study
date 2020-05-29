const binary = (num) => {
  // binary result
  let result = '';
  //base case
  if (num == 0) return '0';
  if (num == 1) return '1';
  //recursive case
  if (num % 2 !== 0) result = binary(Math.floor(num / 2)) + '1' + result;
  else result = binary(num / 2) + '0' + result;
  // return binary result
  return result;
};

console.log(binary(process.argv[2]));
