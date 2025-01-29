const prompt = require("prompt-sync")()

const TOTAL_GRADE = 3
const MAX_DIGITS = 2
const grade1 = parseFloat(prompt("Nota #1 "))
const grade2 = parseFloat(prompt("Nota #2 "))
const grade3 = parseFloat(prompt("Nota #3 "))

const average = (grade1 + grade2 + grade3) / TOTAL_GRADE

console.log(`Final Grade: ${average.toFixed(MAX_DIGITS)}`)