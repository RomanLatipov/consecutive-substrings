function consecutiveSubstrings(string) {
  const n = string.length;
  const result = [];
  for(let i=0; i<n; i++) {
    for(let j=i+1; j<n+1; j++) {
      result.push(string.substring(i, j));
    }
  }
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
