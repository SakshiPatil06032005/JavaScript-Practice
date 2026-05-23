const num = 400
// console.log(num) // no guarantee that it always be the number

const num2 = new Number(41)
// console.log(num2)

const num3 = 99.9978
// console.log(num3.toFixed(2))
// console.log(num3.toPrecision(3))
// console.log(num3.toString())

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-In'))



// ===========================Maths======================================

// console.log(Math)
// console.log(Math.abs(-4))  // absolute means it converyt -ve into positive

// console.log(Math.max(2,4,57,5,6,8,411))
// console.log(Math.min(2,4,57,5,6,8,411))
// console.log(Math.round(99.9))
// console.log(Math.ceil(99.99))
// console.log(Math.floor(99.99))

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor((Math.random()*10)+1))

min = 10
max = 20

console.log(Math.floor(Math.random(max-min)*10 + 1)+min)