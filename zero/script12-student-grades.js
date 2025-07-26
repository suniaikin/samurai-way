// Массив оценок студентов

let grades = [5, 4, 3, 5, 4, 4, 3, 5, 2, 5, 4, 2, 3, 5];
let m = []
for (let i = 0; i < grades.length; i++) {
	if (grades[i] < 5) {
		m.push(grades[i]);
	}
	
}

console.log(m)


// console.log(grades[0])
// console.log(grades[1])
// console.log(grades[2])
// console.log(grades[3])
// console.log(grades[4])


