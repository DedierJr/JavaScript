// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

let username = 'dogLuvr';

const isValidPassword = (username, password) => {
   const tooShort = password.length < 8
   const tooSimilar = password.includes(username)
   const hasSpaces = password.includes(' ')
   return !tooShort && !tooSimilar && !hasSpaces
}


console.log(isValidPassword(username, 'short')); // Output: false
console.log(isValidPassword(username, 'dogluvr')); // Output: false
console.log(isValidPassword(username, 'abcd 123')); // Output: false
console.log(isValidPassword(username, 'SecurePassword')); // Output: true
