const stringSplitter = (string, del) => {
  const indexOfDel = string.indexOf(del);

  if (indexOfDel === -1) return string;

  return [string.slice(0, indexOfDel)].concat(
    stringSplitter(string.slice(indexOfDel + 1), del)
  );
};

console.log(stringSplitter(process.argv[2], process.argv[3]));
