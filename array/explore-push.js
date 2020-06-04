const Array = require('./array.js');

function main() {
  console.log(Array);
  Array.SIZE_RATIO = 3;

  let arr = new Array();

  console.log('new array', arr);

  arr.push();

  console.log(arr);
  console.log(
    'What is the length, capacity and memory address of your array?',
    arr
  );

  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  console.log(
    'What is the length, capacity and memory address of your array? ',
    arr
  );

  console.log('we can see 3x expansion of capacity as length grows');
}

main();
