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

console.log(anagrams(process.argv[2]));
