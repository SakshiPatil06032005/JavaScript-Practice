let name = "Sakshi Patil"
let age = 21

console.log(name + age)       // not recommanded
console.log(`my name is ${name} and my age is ${age}`) // Recommanded

const name2 = new String("Rani  -Are-kar")   // using object we can create the string.
console.log(typeof name2)

// console.log(name2[0])
// console.log(name2.length)
// console.log(name2.slice[0,4])
// console.log(name2.charAt(2))
// console.log(name2.toUpperCase())
// console.log(name2)
// console.log(name2.trim())
// console.log(name2.split("-"))

console.log(name2.replace("-","@"))   //only signle element replace
console.log(name2.replaceAll("-","@"))   // Replaces all 