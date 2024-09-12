async function greet() {
	return 'HELLO!!' // resolved with the value of 'HELLO!!!'
}

greet().then((val) => {
	return 'PROMISE RETURNED WITH ', val
})

async function add(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number'){
		throw 'X and Y must be numbers!'
	}
	return x + y
}

add(6, 7)
	.then((val) => {
		console.log('PROMISE RESOLVED WITH: ', val);
	})
	.catch((err) => {
		console.log('PROMISE REJECTED WITH: ', err);
	});