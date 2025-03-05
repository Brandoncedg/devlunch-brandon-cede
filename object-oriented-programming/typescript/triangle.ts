/*

interface Triangle {
a: number
b: number
c: number
}

const triangle1: Triangle = {
  a: 7,
  b: 10,
  c: 5
}

const triangle2: Triangle = {
  a: 2,
  b: 3,
  c: 6
}


const isValidTriangle = (triangle: Triangle) => { // o hacerlo así const isValidTriangle = ({ a, b, c}: Triangle) => {
  const { a, b, c} = triangle

  return (b + c) > a && (a + c) > b && (a + b) > c
}

console.log(isValidTriangle(triangle1))
console.log(isValidTriangle(triangle2))

*/ 

interface Student {
  name: string
  age: number
  grades: number[]
  
}

const student1: Student = {
  name: "Brandon",
  age: 21,
  grades: [80,90,90,80]
}

const student2: Student = {
  name: "Jimmy Castura",
  age: 21,
  grades: [20,40,60,80]
}

const promedioStudent = (student: Student): number => {
  const total = student.grades.reduce((sum,grade) => sum + grade, 0)
  return total / student.grades.length
}

const printStudentInfo = (student: Student) => {
  console.log(`
    Name: ${student.name}
    Age: ${student.age}
    Grades: ${student.grades}
    Promedio: ${promedioStudent(student)}`)
}

printStudentInfo(student1)
printStudentInfo(student2)