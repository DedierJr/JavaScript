class User {
   constructor(id, name, email, password){
      this.id = id
      this.name = name
      this.email = email
      this.password = password
   }

   yell() {
      const {name} = this
      return `MY NAME IS ${name.toUpperCase()}! AAAAGHHH!!!!`
   }
}

const user1 = new User(1, 'Bob', 'bob@email.com', 'bob123')

user1.yell()