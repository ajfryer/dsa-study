const anagrams = (word) => {
  // base cases
  if (word.length === 1) return [word];
  // recursive cases
  const results = [];
  for (let i = 0; i < word.length; i++) {
    results.push(
      ...anagrams(
        word.substring(0, i) + word.substring(i + 1, word.length)
      ).map((anagram) => {
        return word[i] + anagram;
      })
    );
  }
  return results;
};

console.log(anagrams(process.argv[2]).length);

/*
4 (3) (2) (1)

5!

5*4*3*2*1


7*6*5*4*3*2*1

8*7

n*n


*/
