function firstNonRepeatingCharacter(input) {
  input = input.split("")
  let characters = {}
  
  for (let i = 0; i < input.length; i++) {
    const currentCharacter = input[i]
    if (characters.hasOwnProperty(currentCharacter)) {
      characters[currentCharacter]++
    } else {
      characters[currentCharacter] = 1
    }
  }
  for (const current in characters) {
    if (characters[current] === 1) {
      return current
    }
  }
  return "_"
}

console.log(firstNonRepeatingCharacter("aaazxccc")) // expected: z
console.log(firstNonRepeatingCharacter("aaa")) // expected: _
console.log(firstNonRepeatingCharacter("abbbbbbbbbbbbbbbbbac")) // expected: c
console.log(firstNonRepeatingCharacter("firstNonRepeatingCharacter")) // expected: f
console.log(firstNonRepeatingCharacter("")) // expected: _
console.log(firstNonRepeatingCharacter("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz")) // expected: _
console.log(firstNonRepeatingCharacter("test")) // expected: e



