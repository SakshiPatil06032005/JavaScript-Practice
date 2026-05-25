let a = 41
const b = 38
var c = 45

function f1()
{
    // a = 38
    // b = 41
    c = 67        // var is not follow this property. it will change inside the function also and will reflect on the outside of the scope. so preffered to not use.
}

f1()
console.log("a : ",a)
console.log("b : ",b)
console.log("c : ",c)


function one()
{
    const username = "Sakshi"
    function two()
    {
        const age = 21
        console.log("Username : ", username)
    }
    // console.log("Age : ", age)    // It will through an error.
    two()
}

one()

// same for the if else or loops
if(true)
{
    const username = "Rani"
    if(username==="Rani")
    {
        console.log(`Hello Halkat ${username}`)
        const age = 33
    }
    // console.log(`Age is ${age}`)           // It will also through an Error.
}