// // Array

const arr1 = [1,2,5,7,73,7,38,41,"Sakshi"]
console.log(arr1)
console.log(arr1[0])

const NewArr = new Array(1,2,3,4,5,6,7)
console.log(NewArr)

// // Operations

NewArr.push(8)
console.log(NewArr)

NewArr.pop()
console.log(NewArr)

NewArr.unshift(0)
console.log(NewArr)

NewArr.shift()
console.log(NewArr)

console.log(NewArr.includes(8))
console.log(NewArr.indexOf(8))

const newarr = NewArr.join()
console.log(newarr)
console.log(typeof newarr)

// // Slice and Spice

console.log("A : ",NewArr)
const arn1 = NewArr.slice(1,3)
console.log("After Slice : ",arn1)

console.log("B : ",NewArr)
const arn2 = NewArr.splice(1,3)
console.log("After Splicing : ",arn2)
console.log(NewArr)


const arr1 = [1,2,3,4,7]
const arr2 = [3,4,7,8,90,99]

arr1.push(arr2)           // Reflect changes in  original array
console.log(arr1)

const arr3 = arr1.concat(arr2)         // Creates a nwe array
console.log(arr3)

const spread_arr = [...arr1 , ...arr2]  // We commonly used it beacuse concat works only for 2 arrays but it works for many arrays.
console.log(spread_arr)

const mix_arr = [1,2,3,4,[4,5,6],3,[5,3,4,[4,6,8]],[3,4,6]]
const real_arr =  mix_arr.flat(Infinity)

console.log(real_arr)

console.log(Array.isArray("Sakshi"))
console.log(Array.from("Sakshi"))
console.log(Array.from({Name : "Sakshi", Age : 21}))   // we want to for which we ahve to make array.(key/value)