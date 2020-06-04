const HashMap = require('./hash-map.js');
const SCHashMap = require('./hash-map-sc.js');

const removeDuplicates = (str) => {
  const hashMap = new HashMap();
  let results = '';

  // for every char in str, try to get from hashmap
  // if no error, its a duplicate and we can skip
  // if error, hashmap doesn't have key and we can add to str and hashmap
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    try {
      hashMap.get(char);
    } catch (error) {
      results += char;
      hashMap.set(char, char);
    }
  }

  return results;
};

const palindromes = (str) => {
  const hashMap = new HashMap();

  // for every char in str, try to get from hashmap
  // if no error, its a duplicate and we can skip
  // if error, hashmap doesn't have key and we can add to hashmap
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    try {
      hashMap.get(char);
    } catch (error) {
      hashMap.set(char, char);
    }
  }

  return hashMap.length === Math.floor(str.length / 2) + (str.length % 2);
};

const anagrams = (arr) => {
  const hashMap = new HashMap();

  for (let i = 0; i < arr.length; i++) {
    let sortedStr = arr[i].split('').sort().join('');
    let anagrams;
    try {
      anagrams = hashMap.get(sortedStr);
    } catch (error) {
      anagrams = [];
    }
    anagrams.push(arr[i]);
    hashMap.set(sortedStr, anagrams);
  }

  const results = [];
  hashMap._hashTable.forEach((h) => {
    results.push(h.value);
  });
  return results;
};

const main = () => {
  const lotr = new HashMap();
  const lotrSC = new SCHashMap();

  data = [
    { Hobbit: 'Bilbo' },
    { Hobbit: 'Frodo' },
    { Wizard: 'Gandalf' },
    { Human: 'Aragorn' },
    { Elf: 'Legolas' },
    { Maiar: 'The Necromancer' },
    { Maiar: 'Sauron' },
    { RingBearer: 'Gollum' },
    { LadyOfLight: 'Galadriel' },
    { HalfElven: 'Arwen' },
    { Ent: 'Treebeard' },
    { Dwarf: 'Gimli' },
  ];

  data.forEach((d) => {
    Object.entries(d).forEach(([k, v]) => lotr.set(k, v));
  });

  data.forEach((d) => {
    Object.entries(d).forEach(([k, v]) => lotrSC.set(k, v));
  });

  console.log(lotr);
  console.log('hashed all the items');

  console.log(lotrSC);
  console.log('hashed all the items');
  console.log(lotrSC.get('Wizard'));

  console.log(lotr.get('Hobbit')); // Frodo
  console.log(lotr.get('Maiar')); // Sauron
  console.log(
    'Frodo and Sauron because they wrote over Bilbo and The Necromancer'
  );

  console.log(
    'the capacity of the hashtable is 24. The initial capacity is 8. Once you put 4 items in (50% of capacity), the capacity triples to 24'
  );

  console.log(removeDuplicates('google all that you think can think of'));

  console.log(palindromes('acecarr'));
  console.log(palindromes('north'));

  console.log(
    anagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race', 'dog'])
  );
};

main();
