const prompt = require("prompt-sync")()

const PRICE_PER_DAY = 100

const promoDiscount = 0.05

const days = parseInt(prompt("¿Cuantos días desea quedarse? -> "))

const subTotal = PRICE_PER_DAY * days
const discount = subTotal * promoDiscount
const total = subTotal - discount

console.log(`
    Hotel RECEIPT
    Nights #: ${days}
    Payment:
     - Subtotal: $${subTotal}
     - Discount: $${discount}
     - Total: $${total}

     THANKS...
 `)
