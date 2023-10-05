function isPalindrome(word) {
  let wordArray = word.split("");
  let reverseWordArray = wordArray.reverse();
  let reverseWord = reverseWordArray.join("");
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  // Pseudocode
  // split word into array
  // reverse array
  // join array into string
  // compare word to reverse word
  // if word === reverse word
  // return true
  // else return false
*/

/*
  // I split the word into an array, reversed the array, and then joined the array back into a string.
      I then compared the word to the reverse word and returned true if they were equal and false if they were not.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
