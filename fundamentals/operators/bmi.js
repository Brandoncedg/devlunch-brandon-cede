const prompt = require("prompt-sync")()

const name = prompt("Nombre: ")
const height = parseFloat(prompt("Altura: "))
const weight = parseFloat(prompt("Peso: "))

const imc = weight / Math.pow(height, 2)

console.log(`De acuerdo a su peso su imc (indice de grasa corporal es de )${imc}.`)