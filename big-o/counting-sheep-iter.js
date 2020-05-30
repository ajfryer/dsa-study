const countingSheep = (num) => {
  for (let i = num; i > 0; i--) {
    console.log(`${i}: Another sheep jumps over the fence`);
  }
  console.log('All sheep jumped over the fence');
};

console.log(countingSheep(process.argv[2]));
