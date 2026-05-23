// primitive datatypes : 7 types
// Number
// String
// BigInt
// Boolean
// null
// undefined
// Symbol

// Non-primitive Datatypes
// Array, objects, functions

const arr = ["sakshi","rani", "achal", "pradnya"]

let obj = 
{
    id : 1234,
    email : "sakshi@google.com",
    name : "sakshi",
    age : 21
}

const addition = function(a,b) {
    console.log("Hello Sakshi")
}

// Types of memory
// Stack(primitive)
// heap(non-primitive)

let name = "sakshi"
let name2 = name
name2 = "Pratik"

console.log(name)
console.log(name2)
// it returns the copy of the name not the direct reference so no value is change in primitive datatype.


let obj2 = obj
obj2.email = "sakshipatil@gmail.com"

console.log(obj.email)
console.log(obj2.email)

// In non premitive datatype it give direct reference of the heap so direct change in original.
