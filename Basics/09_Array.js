// Array

const arr1 = [1,2,5,7,73,7,38,41,"Sakshi"]
console.log(arr1)
console.log(arr1[0])

const NewArr = new Array(1,2,3,4,5,6,7)
console.log(NewArr)

// Operations

// NewArr.push(8)
// console.log(NewArr)

// NewArr.pop()
// console.log(NewArr)

// NewArr.unshift(0)
// console.log(NewArr)

// NewArr.shift()
// console.log(NewArr)

// console.log(NewArr.includes(8))
// console.log(NewArr.indexOf(8))

const newarr = NewArr.join()
// console.log(newarr)
// console.log(typeof newarr)

// Slice and Spice

console.log("A : ",NewArr)
const arn1 = NewArr.slice(1,3)
console.log("After Slice : ",arn1)

console.log("B : ",NewArr)
const arn2 = NewArr.splice(1,3)
console.log("After Splicing : ",arn2)
console.log(NewArr)

