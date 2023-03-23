function anagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false
  }
  for (let i = 0; i < word1.length; i++) {
    let letter = word1[i]
    if (word2.indexOf(letter) === -1) {
      return false
    }
  }
  return true
}

// anagram 
// aman, nama
// dia, dai

console.log(anagram("aman", "nama"))
console.log(anagram("dia", "dai"))
console.log(anagram("dia", "daii"))