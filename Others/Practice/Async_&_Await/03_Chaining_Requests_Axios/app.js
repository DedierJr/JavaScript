const fetchNextPosts = (url = 'https://jsonplaceholder.typicode.com/posts/') => {
	console.log(url)
	return axios.get(url)
}

const printPosts = ({data}) => {
	console.log(data)
	for (let post of data) {
		console.log(post.title)
	}
	return Promise.resolve()
}

fetchNextPosts()
	.then(printPosts)
	.catch((err) => {
		console.log('ERROR', err)
	})