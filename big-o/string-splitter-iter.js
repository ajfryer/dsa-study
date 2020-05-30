const stringSplitter = (str, del) => {
  const results = [];
  while (str.length > 0) {
    const delIndex = str.indexOf(del);
    if (delIndex === -1) {
      results.push(str);
      break;
    }
    results.push(str.slice(0, delIndex));
    str = str.slice(delIndex + 1);
  }
  return results;
};

console.log(stringSplitter(process.argv[2], process.argv[3]));
