const stringSplitter = (string, del) => {
  const delIdx = string.indexOf(del);
  // base case
  if (delIdx === -1) return string;
  // recursive case
  return [string.slice(0, delIdx)].concat(
    stringSplitter(string.slice(delIdx + del.length), del)
  );
};

console.log(stringSplitter(process.argv[2], process.argv[3]));
