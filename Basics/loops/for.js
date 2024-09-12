const messages = [
    "Hello there!",
    "This is a bad message",
    "JavaScript is awesome",
    "Please do not use bad words",
    "Have a great day"
];

const bannedWords = ["bad", "not"];

const filterMessages = (messages, bannedWords) => {
  return messages.filter(message => {
    return !bannedWords.some(bannedWord => message.includes(bannedWord));
  });
};

const filteredMessages = filterMessages(messages, bannedWords);
console.log(filteredMessages);

// Saída esperada:
// [
//    "Hello there!",
//    "JavaScript is awesome",
//    "Have a great day"
// ]
