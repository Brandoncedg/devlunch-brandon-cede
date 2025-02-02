
const prompt = require("prompt-sync")()

const MIN_MONTHS_DURATION = 12
const MIN_RECHARGE_AMOUNT = 20
const MAX_RECHARGE_AMOUNT = 80

const SUPER_PROMO_MIN_AMOUNT = 38
const SUPER_PROMO_MULTIPLIER = 2

const MEGA_PROMO_MIN_DURATION = 36
const MEGA_PROMO_MULTIPLIER = 3


function calculateRecharge(amount, duration){
  if (duration < MIN_MONTHS_DURATION) return amount

  let multiplier = 1
  
  if (amount > MIN_RECHARGE_AMOUNT){
    if (duration >= MEGA_PROMO_MIN_DURATION){
      multiplier = MEGA_PROMO_MULTIPLIER
    } else if (
      amount >= SUPER_PROMO_MIN_AMOUNT &&
      amount <= MAX_RECHARGE_AMOUNT
    ) {
      multiplier = SUPER_PROMO_MULTIPLIER
    }

  }
    return amount * multiplier
}


function main(){
  const name= prompt("Nombre: ")
  const amount= parseInt(prompt("Amount $: "))
  const duration= parseInt(prompt("Duration (months): "))

  const recharge = calculateRecharge(amount, duration)
  const promo = recharge - amount

  console.log(`
    THANKS ${name}!
    RECHARGE: $${recharge}
    PROMO: $${promo}
    `)
}

main()