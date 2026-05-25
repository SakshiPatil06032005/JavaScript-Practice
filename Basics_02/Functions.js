function AddTwoNumber(num1, num2)
{
    return num1 + num2
}

function fun1(num1,num2, ...nums)            // ...nums => Flat operator usied for all remaining flexible numers of varibles.
{
    return nums
}

console.log("Addition : ",AddTwoNumber(41,38))
console.log(fun1(21,34,54,565,43,41,38))

// Pass the array

const myArray = [12,45,7,45,41,38]
function myarrFunction(arr)
{
    console.log(arr[5])
}

myarrFunction(myArray)

// Pass the object
function passobject(objectname)
{
    console.log(`My Name is ${objectname.name} and my age is ${objectname.age}`)
}

passobject({name:"Sakshi", age : 21})  // we can also pass the object name or the direct object itself.

