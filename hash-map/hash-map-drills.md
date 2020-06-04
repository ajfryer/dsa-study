# 2 What Does This Do?

Q: What is the output of the following code? explain your answer.

A: The Output is 20, 10. In both maps, the keys are the same, so the values are overwritten and the last set determines the value.

```
const WhatDoesThisDo = function(){
  let str1 = 'Hello World.'; // set str1 to 'Hello World'
  let str2 = 'Hello World.'; // set str2 to 'Hello World'
  let map1 = new HashMap(); // create new map1 hashmap
  map1.set(str1,10); // set key, value pair ('Hello World', 10)
  map1.set(str2,20); // set key, value pair ('Hello World', 20)
  let map2 = new HashMap(); // create another hashmap
  let str3 = str1; // set str3 to 'Hello World'
  let str4 = str2; // set str4 to 'Hello World'
  map2.set(str3,20); // set map2 value of 'Hello World'(str3) to 20
  map2.set(str4,10); // set map2 value of 'Hello World'(str4) to 10

  //console.log(map1.get(str1)); // 20
  //console.log(map2.get(str3)); // 10
};
```

# 3 Demonstrate understanding of Hash maps

1. Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of length 11 using open addressing and a hash function k mod m, where k is the key and m is the length.

```
10 % 33 = 10;
22 % 33 = 22;
31 % 33 = 31;
4 % 33 = 4;
15 % 33 = 15;
28 % 33 = 28;
17 % 33 = 17;
88 % 33 = 22;
59 % 33 = 26;

{4}, {10}, {15}, {17},

```

2. Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map with collisions resolved by separate chaining. Let the hash table have a length m = 9, and let the hash function be k mod m.

```

```
