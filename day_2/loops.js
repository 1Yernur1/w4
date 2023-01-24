vowelsAndConsonants("javascriptloops");

function vowelsAndConsonants(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  const vowel = [];
  const consonant = [];
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] == "a" ||
      s[i] == "e" ||
      s[i] == "i" ||
      s[i] == "o" ||
      s[i] == "u"
    ) {
      vowel.push(s[i]);
    } else {
      consonant.push(s[i]);
    }
  }
  for (let v of vowel) {
    console.log(v);
  }
  for (let c of consonant) {
    console.log(c);
  }
}
