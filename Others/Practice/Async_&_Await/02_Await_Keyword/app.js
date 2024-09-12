async function getPosts() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  console.log(res.data);
}

getPosts();
