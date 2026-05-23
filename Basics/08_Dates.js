//Date

const myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toTimeString())

// const MyCreatedate = new Date("2025-10-04")
const MyCreatedate = new Date(2025,9,4)
// const MyCreatedate = new Date(2025,9,4,17,30)
console.log(MyCreatedate)
console.log(MyCreatedate.toString())
console.log(MyCreatedate.toLocaleDateString()) 
console.log(MyCreatedate.toLocaleString()) 
console.log(MyCreatedate.toTimeString()) 

let MyTimestamp = Date.now()
console.log(MyTimestamp)
console.log(myDate.getTime())

console.log(Date.now())
console.log(Math.floor(Date.now()/100))

let newDate = new Date()
console.log(newDate.getTime())
console.log(newDate.getDate())
console.log(newDate.getMonth())
console.log(newDate.getFullYear())
console.log(newDate.getHours())