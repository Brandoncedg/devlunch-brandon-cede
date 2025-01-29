const prompt = require("prompt-sync")()

const favoriteFoodMaria = prompt("Whats your favorite food Maria? ")
const favoriteFoodPepe = prompt("Whats your favorite food Pepe? ")
const favoriteFoodMalvern = prompt("Whats your favorite food Malvern? ")

const isMariaandPepeSameFavFood = favoriteFoodMaria === favoriteFoodPepe
const isMariaandMalvernSameFavFood = favoriteFoodMaria === favoriteFoodMalvern

const allMatch = isMariaandPepeSameFavFood && isMariaandMalvernSameFavFood
const someMatch = isMariaandPepeSameFavFood || isMariaandMalvernSameFavFood
const noMatch = !isMariaandPepeSameFavFood && !isMariaandMalvernSameFavFood

console.log(`Does Maria share the same favorite food as both Pepe and Malvern? : ${allMatch}`)
console.log(`Does Maria´s favorite food matvh either Pepe´s or Malvern´s ? : ${someMatch}`)
console.log(`Does Maria preference differ from both Pepe´s and Malvern´s ? : ${noMatch}`)