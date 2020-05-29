const countingSheep = (numSheep) => {
  // base case
  if (numSheep === 0) console.log('All sheep jumped over the fence');
  else {
    console.log(`${numSheep}: Another sheep jumps over the fence`);
    countingSheep(numSheep - 1);
  }
};

countingSheep(process.argv[2]);
