function transformUsers(user) {
    return users.map(user => {
      const age = 2024 - user.birthYear
      return {
        fullName: `${user.firstName} ${user.lastName}`,
        age: age,
        isAdult: age >= 18
      }
    })
}

const users = [
    { firstName: "John", lastName: "Doe", birthYear: 1990 },
    { firstName: "Jane", lastName: "Smith", birthYear: 1985 },
    { firstName: "Emily", lastName: "Jones", birthYear: 2000 }
];

const transformedUsers = transformUsers(users);

console.log(transformedUsers);
// Saída esperada:
// [
//     { fullName: "John Doe", age: 34 },
//     { fullName: "Jane Smith", age: 39 },
//     { fullName: "Emily Jones", age: 24 }
// ]
