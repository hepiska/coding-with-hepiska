function palindrome(word) {
  let pjg = word.length
  let out = true
  for (let i = 0; i < pjg; i++) {
    let ujgkir = i
    let ujngkan = pjg - i - 1
    if (ujgkir == ujngkan) {
      break;
    }
    if (word[ujgkir] === word[ujngkan]) {
      out = true
    } else {
      out = false
      break;
    }
  }
  return out
}

// mom -> true 
// level -> true
// fajar -> false (sad boy)

console.log(palindrome("mom")) //true
console.log(palindrome("level")) // true
console.log(palindrome("fajar")) // false