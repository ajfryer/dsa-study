const Array = require('./array.js');

function main() {
  console.log(Array);
  Array.SIZE_RATIO = 3;

  let arr = new Array();

  console.log('new array', arr);

  arr.push(3);

  console.log(arr);
  console.log(
    'What is the length, capacity and memory address of your array?',
    arr,
    arr.get(0)
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

  console.log('Print the 1st item in the array arr', arr.get(0), arr.length);

  while (arr.length > 0) {
    console.log('deleting', arr.get(0));
    arr.remove(0);
  }
  console.log('all items should be deleted', arr);
  arr.push('tauhida');

  console.log('Empty the array and add just 1 item: "tauhida"', arr);

  console.log(arr.get(0));

  console.log(
    'value of arr.get(0) is NaN because our memory is represented by a Float64Array'
  );

  console.log(
    'the purpose of _resize() is to allocate more memory and copy old array contents into a new array with larger or smaller capacity'
  );
}

main();
