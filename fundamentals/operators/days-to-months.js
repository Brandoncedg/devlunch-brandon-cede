const DAYS_PER_MONTH = 30

const prompt = require("prompt-sync")()

const days = parseInt(prompt("# Days: "))

const months = Math.floor(days / DAYS_PER_MONTH)

const daysLeft = days % DAYS_PER_MONTH

console.log(`${days} days are ${months} months and ${daysLeft}.`)