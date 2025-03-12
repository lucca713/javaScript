const creditCard = "1234654812134928" 

const lastDigit =  creditCard.slice(-4)

const maskedNumber = lastDigit.padStart(creditCard.length, "X")