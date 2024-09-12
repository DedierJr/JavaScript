// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

const pick = (arr) => { 
   const picked = Math.floor(Math.random()*arr.length)
   return arr[picked]
}

function getCard() {
   let card = {}
   card.value = pick(values)
   card.suit = pick(suits)
   return card
}

console.log(getCard());
