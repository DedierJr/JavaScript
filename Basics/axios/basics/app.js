async function fetchUsers() {
    try {
        const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users');
        return users;
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
    }
}

const main = async () => {
    const users = await fetchUsers(); // Aqui você obtém o valor resolvido
    return users;
}

const getPosts = async () => {
    const users = await main()
    let posts = []

    users.forEach(user => {
        console.log(user)
    });
}

getPosts()