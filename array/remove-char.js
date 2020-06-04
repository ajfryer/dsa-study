const remove = (str, chars) => {
  let results = '';
  for (let i = 0; i < str.length; i++) {
    let found = false;
    for (let j = 0; j < chars.length; j++) {
      if (str[i] == chars[j]) found = true;
    }
    if (!found) results += str[i];
  }
  return results;
};

console.log(remove('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

/*

    Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
    Output: 'Bttl f th Vwls: Hw vs. Grzny'


*/
