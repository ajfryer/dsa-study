const Array = require('./array.js');

function main() {
  console.log(Array);
  Array.SIZE_RATIO = 3;

  let arr = new Array();

  console.log('new array', arr);

  arr.push();

  console.log(arr);
  console.log(
    'What is the length, capacity and memory address of its first push!?',
    arr
  );

  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  console.log(
    'What is the length, capacity and memory address of the array after 5 new pushes! ',
    arr
  );

  console.log('we can see 3x expansion of capacity as length grows');

  arr.pop();
  arr.pop();
  arr.pop();

  console.log(
    'What is the length, capacity and memory address of the array after 3 pops! ',
    arr
  );

  console.log('after 3 pops, length decreases by 3 but capacity is unaffected');
}

main();
