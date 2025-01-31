const prompt = require("prompt-sync")()

const birthdate = prompt("Whats your birthdate in format (YYYY/MM/DD)? ")

const today = new Date()
const birthdateCopy = new Date(birthdate)

let age = today.getFullYear() - birthdateCopy.getFullYear()

const birthdateBefore = (
    today.getMonth() > birthdateCopy.getMonth() ||
    (
        today.getMonth() === birthdateCopy.getMonth() &&
        today.getDate() >= birthdateCopy.getDate()
    )
)

if (!birthdateBefore) {
    age--
}

if (age >= 18){
    console.log("Bienvenido al bar de Moe")
}   else {
    console.log("No puedes pasar hasta tener 18 años o más")
}
    console.log(age)