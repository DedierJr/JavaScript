function processStudentScores(students) {
    // Validação das Notas (some)
    if(students.some(student => student.score < 0 || student.score) > 100) return "Erro, possuem notas inválidas"


    // Verificação de Aprovados (every)
    const allPassed = students.every(student => student.score > 60)

    // Ordenação por Notas (sort)
    students.sort((a,b) => b.score - a.score)

    return {
        allPassed: allPassed,
        sortedStudents: students
    };
}

const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 95 },
    { name: "Charlie", score: 50 },
    { name: "David", score: 75 },
    { name: "Eve", score: 60 }
];

const result = processStudentScores(students);

console.log(result);
// Saída esperada:
// {
//   allPassed: false,
//   sortedStudents: [
//     { name: "Bob", score: 95 },
//     { name: "Alice", score: 85 },
//     { name: "David", score: 75 },
//     { name: "Eve", score: 60 },
//     { name: "Charlie", score: 50 }
//   ]
// }
