const urlifyStr = (str) => str.replace(/ /g, '%20');

console.log(urlifyStr(process.argv[2]));
