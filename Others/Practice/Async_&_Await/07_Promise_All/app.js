async function getPosts() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const data = res.data
  console.log(data)
  return data
}

function printAllPostTitles(data) {
	for (let post of data){
		console.log(post.title)
	}
}

getPosts()
	.then(printAllPostTitles)

// fetchNextPlanets()
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(printPlanets)
// 	.catch((err) => {
// 		console.log('ERROR!!', err);
// 	});
